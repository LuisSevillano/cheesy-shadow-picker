<script>
	import { onDestroy, onMount } from 'svelte';
	import shadowsCatalog from '$lib/utils/data';
	import ShadowLibrary from '$lib/components/studio/ShadowLibrary.svelte';
	import StudioToolbar from '$lib/components/studio/StudioToolbar.svelte';
	import StudioWorkspace from '$lib/components/studio/StudioWorkspace.svelte';
	import { createDragHandlers } from '$lib/components/studio/logic/dragLabels';
	import {
		cloneLabels,
		getAvailableArtboardWidth,
		isHtmlFile,
		readImageFileAsDataUrl,
		readImageNaturalWidth
	} from '$lib/components/studio/logic/fileImport';
	import { getShadowForCssRule, upsertCssShadowRule } from '$lib/components/studio/logic/cssSheet';
	import { mainShadowColorDef, mainTextColorDef } from '$lib/config';
	import { parseAi2htmlDocument, pickBestArtboard } from '$lib/utils/ai2html';
	import {
		buildCssShadowRule,
		cssClassNameRegex,
		cssColorToHex,
		extractShadowColor,
		getNativeArtboardWidth,
		normalizeShadowSignature,
		recolorShadow,
		sanitizeCssClassName
	} from '$lib/utils/studioHelpers';
	import utils from '$lib/utils/utils';

	const { copyToClipboard } = utils;
	const defaultShadowRaw = shadowsCatalog[0]?.shadow || '';

	let { sampleMode = false, sampleHtml = '', onLoadSample = () => {} } = $props();

	let stageRef = $state();
	let workspaceColumnRef = $state();
	let importCss = $state('');
	let parseError = $state('');
	let imageLoadError = $state('');
	let htmlFileName = $state('');
	let imageFileName = $state('');
	let imagePreview = $state('');
	let imageNaturalWidth = $state(1200);
	let rootId = $state('');
	let rootClassName = $state('ai2html');

	let artboards = $state([]);
	let selectedArtboardId = $state('');
	let labels = $state([]);
	let activeLabelId = $state('');

	let selectedShadowRaw = $state(defaultShadowRaw);
	let textColor = $state(mainTextColorDef);
	let shadowColor = $state(mainShadowColorDef);
	let previewOriginal = $state(false);

	let isDragOver = $state(false);
	let importedStyleNode = $state();
	let canUseEyeDropper = $state(false);
	let cssClassName = $state('');
	let cssRules = $state([]);

	const selectedArtboard = $derived(
		artboards.find((artboard) => artboard.id === selectedArtboardId) || null
	);
	const selectedLabel = $derived(labels.find((label) => label.id === activeLabelId) || null);
	const selectedShadowMeta = $derived(
		shadowsCatalog.find((item) => item.shadow === selectedShadowRaw) || null
	);
	const activeShadow = $derived(recolorShadow(selectedShadowRaw, shadowColor));
	const workspaceImage = $derived(selectedArtboard?.imageSrc || imagePreview);
	const stageWidth = $derived(getNativeArtboardWidth(selectedArtboard, imageNaturalWidth));
	const cssClassNameValid = $derived(cssClassNameRegex.test(cssClassName));
	const defaultRuleShadow = $derived(selectedLabel?.shadow || activeShadow || '');
	const currentRulePreview = $derived(
		cssClassNameValid && defaultRuleShadow
			? buildCssShadowRule(cssClassName, defaultRuleShadow)
			: ''
	);
	const cssSheetPreview = $derived(
		cssRules.map((rule) => buildCssShadowRule(rule.className, rule.shadow)).join('\n')
	);

	$effect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		if (!importedStyleNode) {
			importedStyleNode = document.createElement('style');
			importedStyleNode.setAttribute('data-ai2html-import', 'true');
			document.head.append(importedStyleNode);
		}

		importedStyleNode.textContent = importCss;
	});

	onMount(() => {
		canUseEyeDropper = typeof window !== 'undefined' && 'EyeDropper' in window;
	});

	let hasLoadedSample = $state(false);

	$effect(() => {
		if (typeof window === 'undefined' || !sampleMode || hasLoadedSample || !sampleHtml) {
			return;
		}

		hasLoadedSample = true;
		loadAi2htmlContent(sampleHtml, 'sample-ai2html.html');
	});

	async function loadAi2htmlContent(htmlContent, fileName = '') {
		parseError = '';
		imageLoadError = '';

		try {
			const parsed = parseAi2htmlDocument(htmlContent);
			artboards = parsed.artboards;
			rootId = parsed.rootId;
			rootClassName = parsed.rootClassName;
			importCss = parsed.cssText;
			htmlFileName = fileName;

			imagePreview = '';
			imageFileName = '';

			const availableWidth = getAvailableArtboardWidth(workspaceColumnRef);
			setArtboard(pickBestArtboard(parsed.artboards, availableWidth) || parsed.artboards[0]);
		} catch (error) {
			parseError = error instanceof Error ? error.message : 'Could not read ai2html file.';
		}
	}

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			importedStyleNode?.remove();
		}

		dragHandlers.cleanupDragState();
	});

	function updateLabel(labelId, updater) {
		labels = labels.map((label) => (label.id === labelId ? updater(label) : label));
	}

	function setArtboard(artboard) {
		if (!artboard) {
			return;
		}

		imageLoadError = '';
		selectedArtboardId = artboard.id;
		labels = cloneLabels(artboard.labels || []);
		activeLabelId = labels[0]?.id || '';
	}

	async function loadAi2htmlFile(file) {
		if (!file) {
			return;
		}

		const htmlContent = await file.text();
		await loadAi2htmlContent(htmlContent, file.name);
	}

	function handleAi2htmlInput(event) {
		const [file] = event.currentTarget.files || [];
		loadAi2htmlFile(file);
	}

	function handleDragOver(event) {
		event.preventDefault();
	}

	function handleWorkspaceDragOver(event) {
		event.preventDefault();
		isDragOver = true;
	}

	function handleWorkspaceDragLeave(event) {
		if (event.currentTarget.contains(event.relatedTarget)) {
			return;
		}
		isDragOver = false;
	}

	function loadImageFile(file) {
		if (!file || !file.type.startsWith('image/')) {
			return;
		}

		readImageFileAsDataUrl(file)
			.then(async (imageDataUrl) => {
				imagePreview = imageDataUrl;
				imageFileName = file.name;
				htmlFileName = '';
				artboards = [];
				selectedArtboardId = '';
				rootId = '';
				rootClassName = 'ai2html';
				importCss = '';
				labels = [];
				activeLabelId = '';

				const naturalWidth = await readImageNaturalWidth(imageDataUrl);
				if (naturalWidth) {
					imageNaturalWidth = naturalWidth;
				}
			})
			.catch(() => {
				imageLoadError = 'Could not read image file.';
			});
	}

	function handleDroppedFile(file) {
		if (!file) {
			return;
		}

		if (file.type.startsWith('image/')) {
			loadImageFile(file);
			return;
		}

		if (isHtmlFile(file)) {
			loadAi2htmlFile(file);
		}
	}

	function handleAi2htmlDrop(event) {
		event.preventDefault();
		isDragOver = false;
		const [file] = event.dataTransfer.files || [];
		handleDroppedFile(file);
	}

	function handleImageInput(event) {
		const [file] = event.currentTarget.files || [];
		loadImageFile(file);
	}

	function handleImageLoad(event) {
		const img = event.target;
		if (img.naturalWidth) {
			imageNaturalWidth = img.naturalWidth;
		}
		imageLoadError = '';
	}

	function handleImageError() {
		const src = selectedArtboard?.imageSrc || 'Unknown file';
		imageLoadError = `Could not load artboard image (${src}). Export/upload image assets and try again.`;
	}

	function handleArtboardSelection(event) {
		const artboard = artboards.find(({ id }) => id === event.currentTarget.value);
		setArtboard(artboard);
	}

	function selectMatchingShadow(shadow = '') {
		if (!shadow || shadow === 'none') {
			return;
		}

		const signature = normalizeShadowSignature(shadow);
		const match = shadowsCatalog.find(
			(item) => normalizeShadowSignature(recolorShadow(item.shadow, shadowColor)) === signature
		);

		if (match) {
			selectedShadowRaw = match.shadow;
		}
	}

	function syncControlsFromLabel(labelId) {
		if (!labelId || typeof document === 'undefined') {
			return;
		}

		const hostNode = document.getElementById(labelId);
		if (!hostNode) {
			return;
		}

		const textNode = hostNode.querySelector('p, span, div') || hostNode;
		const computed = getComputedStyle(textNode);

		const computedTextColor = cssColorToHex(computed.color);
		if (computedTextColor) {
			textColor = computedTextColor;
		}

		const computedShadow = computed.textShadow;
		if (computedShadow && computedShadow !== 'none') {
			const derivedShadowColor = extractShadowColor(computedShadow);
			if (derivedShadowColor) {
				shadowColor = derivedShadowColor;
			}

			selectMatchingShadow(computedShadow);
		}
	}

	function selectLabel(labelId) {
		activeLabelId = labelId;
		syncControlsFromLabel(labelId);
	}

	function chooseShadow(shadow) {
		selectedShadowRaw = shadow;
		if (!activeLabelId) {
			labels = labels.map((label) => ({
				...label,
				shadow: recolorShadow(shadow, shadowColor)
			}));
			return;
		}

		updateLabel(activeLabelId, (label) => ({
			...label,
			shadow: recolorShadow(shadow, shadowColor)
		}));
	}

	function applyShadowToAll() {
		labels = labels.map((label) => ({ ...label, shadow: activeShadow }));
	}

	function clearSelectedShadow() {
		if (!activeLabelId) {
			return;
		}

		updateLabel(activeLabelId, (label) => ({ ...label, shadow: '' }));
	}

	function recolorSelectedShadow() {
		if (!activeLabelId) {
			return;
		}

		updateLabel(activeLabelId, (label) => ({
			...label,
			shadow: recolorShadow(label.shadow || selectedShadowRaw, shadowColor)
		}));
	}

	function applyTextToSelected() {
		if (!activeLabelId) {
			return;
		}

		updateLabel(activeLabelId, (label) => ({ ...label, textColor }));
	}

	function applyTextToAll() {
		labels = labels.map((label) => ({ ...label, textColor }));
	}

	function clearTextColors() {
		labels = labels.map((label) => ({ ...label, textColor: '' }));
	}

	function handleTextColorLive() {
		if (activeLabelId) {
			applyTextToSelected();
			return;
		}

		if (labels.length) {
			applyTextToAll();
		}
	}

	function handleShadowColorLive() {
		if (activeLabelId) {
			recolorSelectedShadow();
			return;
		}

		labels = labels.map((label) => {
			if (!label.shadow) {
				return label;
			}

			return {
				...label,
				shadow: recolorShadow(label.shadow, shadowColor)
			};
		});
	}

	async function copyCurrentShadow() {
		if (!activeShadow) {
			return;
		}

		await copyToClipboard(`text-shadow: ${activeShadow}`);
	}

	function handleCssClassNameInput(event) {
		cssClassName = sanitizeCssClassName(event.currentTarget.value || '');
	}

	function addRuleToSheet() {
		if (!cssClassNameValid) {
			return;
		}

		const shadow = getShadowForCssRule({ selectedLabel, activeLabelId, activeShadow });
		if (!shadow) {
			return;
		}

		cssRules = upsertCssShadowRule(cssRules, cssClassName, shadow);
	}

	function clearCssSheet() {
		cssRules = [];
	}

	async function copyCssSheet() {
		if (!cssSheetPreview) {
			return;
		}

		await copyToClipboard(cssSheetPreview);
	}

	async function pickColor(target) {
		if (!canUseEyeDropper) {
			return;
		}

		try {
			const eyeDropper = new window.EyeDropper();
			const result = await eyeDropper.open();
			if (target === 'shadow') {
				shadowColor = result.sRGBHex;
				if (selectedLabel) {
					recolorSelectedShadow();
				}
				return;
			}

			textColor = result.sRGBHex;
			if (selectedLabel) {
				applyTextToSelected();
			}
		} catch (_error) {
			// user cancelled eyedropper
		}
	}

	const dragHandlers = createDragHandlers({
		getStageRef: () => stageRef,
		selectLabel,
		updateLabel,
		clearActiveLabel: () => {
			activeLabelId = '';
		}
	});

	const startDrag = dragHandlers.startDrag;
	const handlePointerMove = dragHandlers.handlePointerMove;
	const handlePointerUp = dragHandlers.handlePointerUp;
	const handleStagePointerDown = dragHandlers.handleStagePointerDown;

	function buildLabelStyle(label) {
		const styleParts = [];

		if (label.styleMap) {
			for (const [key, value] of Object.entries(label.styleMap)) {
				styleParts.push(`${key}: ${value}`);
			}
		}

		if (!previewOriginal && label.shadow) {
			styleParts.push(`--editor-shadow: ${label.shadow}`);
		}

		if (!previewOriginal && label.textColor) {
			styleParts.push(`--editor-text-color: ${label.textColor}`);
		}

		return styleParts.join('; ');
	}
</script>

<svelte:window
	onpointermove={handlePointerMove}
	onpointerup={handlePointerUp}
	onpointercancel={handlePointerUp}
/>

<section class="studio">
	<aside class="left-sidebar">
		<details class="mobile-tools" open>
			<summary>Tools</summary>
			<div class="mobile-tools-body">
				<StudioToolbar
					{artboards}
					bind:selectedArtboardId
					{stageWidth}
					labelsCount={labels.length}
					{selectedLabel}
					{activeShadow}
					{workspaceImage}
					{htmlFileName}
					{imageFileName}
					{onLoadSample}
					bind:previewOriginal
					bind:textColor
					bind:shadowColor
					{cssClassName}
					{cssClassNameValid}
					{currentRulePreview}
					{cssSheetPreview}
					{cssRules}
					{canUseEyeDropper}
					onAi2htmlDrop={handleAi2htmlDrop}
					onAi2htmlInput={handleAi2htmlInput}
					onImageInput={handleImageInput}
					onArtboardChange={handleArtboardSelection}
					onApplyShadowToAll={applyShadowToAll}
					onApplyTextToSelected={applyTextToSelected}
					onApplyTextToAll={applyTextToAll}
					onClearTextColors={clearTextColors}
					onTextColorLive={handleTextColorLive}
					onPickTextColor={() => pickColor('text')}
					onRecolorSelectedShadow={recolorSelectedShadow}
					onClearSelectedShadow={clearSelectedShadow}
					onCopyCurrentShadow={copyCurrentShadow}
					onShadowColorLive={handleShadowColorLive}
					onPickShadowColor={() => pickColor('shadow')}
					onCssClassNameInput={handleCssClassNameInput}
					onAddRuleToSheet={addRuleToSheet}
					onCopyCssSheet={copyCssSheet}
					onClearCssSheet={clearCssSheet}
				/>
			</div>
		</details>
	</aside>

	<StudioWorkspace
		{parseError}
		{workspaceImage}
		{isDragOver}
		{imageLoadError}
		{selectedArtboard}
		{rootId}
		{rootClassName}
		{labels}
		{activeLabelId}
		{stageWidth}
		{buildLabelStyle}
		onDragOver={handleDragOver}
		onWorkspaceDragOver={handleWorkspaceDragOver}
		onWorkspaceDragLeave={handleWorkspaceDragLeave}
		onDrop={handleAi2htmlDrop}
		onStagePointerDown={handleStagePointerDown}
		onSelectLabel={selectLabel}
		onStartDrag={startDrag}
		onImageLoad={handleImageLoad}
		onImageError={handleImageError}
		bind:workspaceColumnRef
		bind:stageRef
	/>

	<aside class="right-sidebar">
		<ShadowLibrary
			{selectedShadowRaw}
			{shadowColor}
			{textColor}
			{selectedShadowMeta}
			onChooseShadow={chooseShadow}
		/>
	</aside>
</section>

<style>
	.studio {
		display: grid;
		gap: 0;
		align-items: stretch;
		height: 100%;
		min-height: 0;
		background: var(--canvas-bg);
		background-image: linear-gradient(90deg, hsl(0 0% 84%) 1px, transparent 1px),
			linear-gradient(180deg, hsl(0 0% 84%) 1px, transparent 1px);
		background-size: 20px 20px;
	}

	.left-sidebar,
	.right-sidebar {
		display: grid;
		align-content: start;
		min-width: 0;
		min-height: 0;
	}

	.left-sidebar {
		overflow: auto;
		background: var(--panel-bg);
		border-right: 1px solid var(--panel-border);
	}

	.mobile-tools {
		border: 0;
	}

	.mobile-tools-body {
		display: contents;
	}

	.mobile-tools > summary {
		display: none;
	}

	.right-sidebar {
		overflow: auto;
		background: var(--sidebar-bg);
		border-left: 1px solid var(--panel-border);
		min-width: 0;
	}

	@media (max-width: 979px) {
		.studio {
			grid-template-columns: minmax(0, 1fr);
			grid-template-rows: auto auto auto;
			overflow: auto;
		}

		.left-sidebar,
		.right-sidebar {
			border: 1px solid var(--panel-border);
		}

		.left-sidebar {
			position: sticky;
			top: 0;
			z-index: 5;
			overflow: visible;
			border-left: 0;
			border-right: 0;
		}

		.mobile-tools {
			border-bottom: 1px solid var(--panel-border);
			background: var(--panel-bg);
		}

		.mobile-tools > summary {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.35rem 0.75rem;
			min-height: 34px;
			font-size: 0.68rem;
			font-weight: 700;
			letter-spacing: 0.04em;
			text-transform: uppercase;
			color: var(--text-primary);
			cursor: pointer;
			list-style: none;
		}

		.mobile-tools > summary::-webkit-details-marker {
			display: none;
		}

		.mobile-tools > summary::after {
			content: '+';
			font-size: 0.95rem;
			line-height: 1;
		}

		.mobile-tools[open] > summary::after {
			content: '\2212';
		}

		.mobile-tools[open] .mobile-tools-body {
			display: block;
			max-height: min(30vh, 420px);
			overflow: auto;
			overscroll-behavior: contain;
			border-bottom: 1px solid var(--panel-border);
		}

		.right-sidebar {
			max-height: 180px;
		}
	}

	@media (max-width: 600px) {
		:global(.left-sidebar .toolbar-row) {
			padding: 0.5rem;
		}

		:global(.left-sidebar button),
		:global(.left-sidebar .tool-button) {
			min-height: 44px;
			min-width: 44px;
			padding: 0.5rem 0.65rem;
			font-size: 0.75rem;
			touch-action: manipulation;
		}

		:global(.left-sidebar .action-row) {
			flex-direction: column;
		}

		:global(.left-sidebar .action-row button) {
			width: 100%;
			justify-content: center;
		}
	}

	@media (min-width: 980px) {
		.studio {
			grid-template-columns: 300px minmax(0, 1fr) 260px;
			align-items: stretch;
		}

		.mobile-tools {
			height: 100%;
		}

		.mobile-tools:not([open]) > .mobile-tools-body {
			display: block;
			max-height: none;
			overflow: visible;
		}

		.left-sidebar {
			height: 100%;
		}

		.right-sidebar {
			height: 100%;
		}
	}

	:global(body.dragging-labels) {
		user-select: none;
	}
</style>
