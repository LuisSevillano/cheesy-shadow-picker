<script>
	import { onDestroy, onMount } from 'svelte';
	import shadowsCatalog from '$lib/utils/data';
	import ShadowLibrary from '$lib/components/studio/ShadowLibrary.svelte';
	import StudioToolbar from '$lib/components/studio/StudioToolbar.svelte';
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

	let { sampleMode = false, sampleHtml = '' } = $props();

	let stageRef = $state();
	let importCss = $state('');
	let parseError = $state('');
	let htmlFileName = $state('');
	let imageFileName = $state('');
	let imagePreview = $state('');
	let imageAspectRatio = $state(16 / 9);
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

	let dragState = $state(null);
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
	const workspaceRatio = $derived(selectedArtboard?.aspectRatio || imageAspectRatio || 16 / 9);
	const stageWidth = $derived(getNativeArtboardWidth(selectedArtboard, imageNaturalWidth));
	const stageHeight = $derived(Math.round(stageWidth / workspaceRatio));
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

		try {
			const parsed = parseAi2htmlDocument(htmlContent);
			artboards = parsed.artboards;
			rootId = parsed.rootId;
			rootClassName = parsed.rootClassName;
			importCss = parsed.cssText;
			htmlFileName = fileName;

			imagePreview = '';
			imageFileName = '';

			const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
			setArtboard(pickBestArtboard(parsed.artboards, viewportWidth) || parsed.artboards[0]);
		} catch (error) {
			parseError = error instanceof Error ? error.message : 'Could not read ai2html file.';
		}
	}

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			importedStyleNode?.remove();
			document.body.classList.remove('dragging-labels');
		}
	});

	function cloneLabels(list = []) {
		return list.map((label) => ({
			...label,
			styleMap: { ...(label.styleMap || {}) }
		}));
	}

	function updateLabel(labelId, updater) {
		labels = labels.map((label) => (label.id === labelId ? updater(label) : label));
	}

	function setArtboard(artboard) {
		if (!artboard) {
			return;
		}

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

	function handleAi2htmlDrop(event) {
		event.preventDefault();
		const [file] = event.dataTransfer.files || [];
		if (!file) {
			return;
		}

		if (file.name.endsWith('.html') || file.type.includes('html') || file.type.includes('text')) {
			loadAi2htmlFile(file);
		}
	}

	function handleImageInput(event) {
		const [file] = event.currentTarget.files || [];
		if (!file || !file.type.startsWith('image/')) {
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			imagePreview = reader.result;
			imageFileName = file.name;
			htmlFileName = '';
			artboards = [];
			selectedArtboardId = '';
			rootId = '';
			rootClassName = 'ai2html';
			importCss = '';
			labels = [];
			activeLabelId = '';

			const imageElement = new Image();
			imageElement.onload = () => {
				if (imageElement.naturalWidth && imageElement.naturalHeight) {
					imageNaturalWidth = imageElement.naturalWidth;
					imageAspectRatio = imageElement.naturalWidth / imageElement.naturalHeight;
				}
			};
			imageElement.src = reader.result;
		};

		reader.readAsDataURL(file);
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

	function getCurrentLabelShadow() {
		if (!activeLabelId || typeof document === 'undefined') {
			return '';
		}

		const hostNode = document.getElementById(activeLabelId);
		if (!hostNode) {
			return '';
		}

		const textNode = hostNode.querySelector('p, span, div') || hostNode;
		const computedShadow = getComputedStyle(textNode).textShadow;
		return computedShadow && computedShadow !== 'none' ? computedShadow : '';
	}

	function getShadowForCssRule() {
		if (selectedLabel?.shadow) {
			return selectedLabel.shadow;
		}

		const labelShadow = getCurrentLabelShadow();
		if (labelShadow) {
			return labelShadow;
		}

		return activeShadow;
	}

	function addRuleToSheet() {
		if (!cssClassNameValid) {
			return;
		}

		const shadow = getShadowForCssRule();
		if (!shadow) {
			return;
		}

		const nextRule = {
			className: cssClassName,
			shadow
		};

		const index = cssRules.findIndex((rule) => rule.className === cssClassName);
		if (index === -1) {
			cssRules = [...cssRules, nextRule];
			return;
		}

		cssRules = cssRules.map((rule, ruleIndex) => (ruleIndex === index ? nextRule : rule));
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

	function startDrag(event, label) {
		if (!stageRef) {
			return;
		}

		event.stopPropagation();
		selectLabel(label.id);

		const styleMap = label.styleMap || {};
		const rect = stageRef.getBoundingClientRect();
		dragState = {
			id: label.id,
			startX: event.clientX,
			startY: event.clientY,
			startTop: parseFloat(styleMap.top) || 0,
			startLeft: parseFloat(styleMap.left) || 0,
			width: rect.width,
			height: rect.height
		};

		document.body.classList.add('dragging-labels');
		event.currentTarget.setPointerCapture?.(event.pointerId);
	}

	function handlePointerMove(event) {
		if (!dragState) {
			return;
		}

		const deltaX = ((event.clientX - dragState.startX) / dragState.width) * 100;
		const deltaY = ((event.clientY - dragState.startY) / dragState.height) * 100;

		const nextTop = Math.min(100, Math.max(0, dragState.startTop + deltaY));
		const nextLeft = Math.min(100, Math.max(0, dragState.startLeft + deltaX));

		updateLabel(dragState.id, (label) => {
			const styleMap = { ...(label.styleMap || {}) };
			styleMap.top = `${nextTop}%`;
			styleMap.left = `${nextLeft}%`;
			return { ...label, styleMap };
		});
	}

	function handlePointerUp() {
		dragState = null;
		document.body.classList.remove('dragging-labels');
	}

	function handleStagePointerDown(event) {
		if (!event.target.closest('.draggable-label')) {
			activeLabelId = '';
		}
	}

	function buildLabelStyle(label) {
		const styleParts = [];

		if (label.styleMap) {
			for (const [key, value] of Object.entries(label.styleMap)) {
				styleParts.push(`${key}: ${value}`);
			}
		}

		if (label.shadow) {
			styleParts.push(`--editor-shadow: ${label.shadow}`);
		}

		if (label.textColor) {
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
	</aside>

	<div class="workspace-column">
		{#if parseError}
			<p class="error">{parseError}</p>
		{/if}

		<div class="workspace-shell">
			{#if workspaceImage}
				<div class="workspace-scroll">
					<div class="stage-host" style={`width:${stageWidth}px;`}>
						<div id={rootId || 'ai2html-root'} class={`${rootClassName || 'ai2html'} editor-root`}>
							{#if selectedArtboard}
								<div
									id={selectedArtboard.id}
									class={`${selectedArtboard.className || 'g-artboard'} editor-artboard`}
									style={selectedArtboard.style || ''}
									bind:this={stageRef}
									onpointerdown={handleStagePointerDown}
								>
									{#if selectedArtboard.paddingStyle}
										<div style={selectedArtboard.paddingStyle}></div>
									{/if}
									<img
										id={selectedArtboard.imageId}
										class={selectedArtboard.imageClassName || 'g-aiImg'}
										src={workspaceImage}
										alt={selectedArtboard.imageAlt || 'Mapa de fondo'}
										loading="eager"
										fetchpriority="high"
										width={stageWidth}
										height={stageHeight}
									/>

									{#each labels as label (label.id)}
										<button
											type="button"
											id={label.id}
											class={`draggable-label ${label.className} ${activeLabelId === label.id ? 'is-active' : ''} ${label.textColor ? 'has-custom-text' : ''} ${label.shadow ? 'has-custom-shadow' : ''}`}
											style={buildLabelStyle(label)}
											aria-label={`Text ${label.previewText}`}
											onfocus={() => selectLabel(label.id)}
											onpointerdown={(event) => startDrag(event, label)}
										>
											{@html label.html}
										</button>
									{/each}
								</div>
							{:else}
								<div
									class="workspace-empty"
									role="region"
									aria-label="Drop zone for ai2html files"
									ondragover={handleDragOver}
									ondrop={handleAi2htmlDrop}
								>
									<img
										src={workspaceImage}
										alt="Editor background"
										loading="eager"
										fetchpriority="high"
										width={stageWidth}
										height={stageHeight}
									/>
									{#each labels as label (label.id)}
										<button
											type="button"
											class={`draggable-label ${activeLabelId === label.id ? 'is-active' : ''} ${label.textColor ? 'has-custom-text' : ''} ${label.shadow ? 'has-custom-shadow' : ''}`}
											style={buildLabelStyle(label)}
											aria-label={`Text ${label.previewText}`}
											onfocus={() => selectLabel(label.id)}
											onpointerdown={(event) => startDrag(event, label)}
										>
											{@html label.html}
										</button>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</div>
			{:else}
				<div
					class="workspace-empty"
					role="region"
					aria-label="Drop zone for ai2html files"
					ondragover={handleDragOver}
					ondrop={handleAi2htmlDrop}
				>
					<svg class="empty-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path d="M5 20h14v-2H5zm7-16-5.5 5.5 1.42 1.42L11 8.84V16h2V8.84l3.08 3.08 1.42-1.42z"
						></path>
					</svg>
					<p>Drag & drop your ai2html file here</p>
					<p class="empty-hint">or use the buttons in the toolbar</p>
				</div>
			{/if}
		</div>
	</div>

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
		align-items: start;
		height: 100%;
		background: var(--canvas-bg);
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

	.right-sidebar {
		overflow: hidden;
		background: var(--sidebar-bg);
		border-left: 1px solid var(--panel-border);
	}

	.workspace-column {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		gap: 0;
		align-content: start;
		min-width: 0;
		min-height: 0;
		overflow: hidden;
	}

	.workspace-shell {
		border: 0;
		background: transparent;
		padding: 0;
		min-height: 0;
	}

	.workspace-scroll {
		overflow: auto;
		height: 100%;
		padding: 0.75rem;
	}

	.editor-root {
		position: relative;
	}

	.editor-artboard,
	.image-stage {
		position: relative !important;
		display: block !important;
		overflow: hidden;
		outline: 1px solid rgb(30 43 68 / 16%);
	}

	.image-stage > img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.workspace-empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 2rem 1rem;
		text-align: center;
		color: var(--text-muted);
		background: transparent;
		min-height: 200px;
	}

	.workspace-empty .empty-icon {
		width: 48px;
		height: 48px;
		opacity: 0.4;
	}

	.workspace-empty p {
		margin: 0;
		font-size: 0.85rem;
	}

	.workspace-empty .empty-hint {
		font-size: 0.75rem;
		opacity: 0.7;
	}

	.draggable-label {
		border: none;
		background: transparent;
		padding: 0;
		cursor: grab;
		touch-action: none;
		-webkit-tap-highlight-color: transparent;
		outline: 1px dashed transparent;
	}

	.draggable-label:active {
		cursor: grabbing;
	}

	.draggable-label.is-active {
		/* outline-color: rgb(44 96 223 / 25%); */
	}

	.draggable-label.has-custom-text :global(p) {
		color: var(--editor-text-color) !important;
	}

	.draggable-label.has-custom-shadow :global(p) {
		text-shadow: var(--editor-shadow) !important;
	}

	.draggable-label:focus-visible {
		outline: 2px solid var(--brand-accent);
		outline-offset: 1px;
	}

	.error {
		margin: 0.75rem 0.75rem 0;
		padding: 0.55rem;
		border: 1px solid #c7a2a2;
		background: #fff1f1;
		color: #7d3e3e;
	}

	@media (max-width: 979px) {
		.studio {
			grid-template-columns: minmax(0, 1fr);
			grid-template-rows: auto 1fr auto;
		}

		.left-sidebar,
		.right-sidebar {
			border: 1px solid var(--panel-border);
		}

		.left-sidebar {
			overflow-x: auto;
		}

		.right-sidebar {
			max-height: 180px;
		}

		.workspace-column {
			min-height: 45vh;
			order: -1;
		}

		.workspace-scroll {
			padding: 0.5rem;
		}

		.stage-host {
			max-width: 100%;
		}
	}

	@media (max-width: 600px) {
		.left-sidebar .toolbar-row {
			padding: 0.5rem;
		}

		.left-sidebar button,
		.left-sidebar .tool-button {
			min-height: 44px;
			min-width: 44px;
			padding: 0.5rem 0.65rem;
			font-size: 0.75rem;
			touch-action: manipulation;
		}

		.left-sidebar .action-row {
			flex-direction: column;
		}

		.left-sidebar .action-row button {
			width: 100%;
			justify-content: center;
		}
	}

	@media (min-width: 980px) {
		.studio {
			grid-template-columns: 256px minmax(0, 1fr) 200px;
			align-items: start;
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
