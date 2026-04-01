<script>
	import TrashIcon from './TrashIcon.svelte';

	let {
		artboards = [],
		selectedArtboardId = $bindable(''),
		stageWidth = 0,
		labelsCount = 0,
		selectedLabel = null,
		activeShadow = '',
		workspaceImage = '',
		htmlFileName = '',
		imageFileName = '',
		onLoadSample = () => {},
		previewOriginal = $bindable(false),
		textColor = $bindable('#000000'),
		shadowColor = $bindable('#000000'),
		cssClassName = '',
		cssClassNameValid = false,
		currentRulePreview = '',
		cssSheetPreview = '',
		cssRules = [],
		canUseEyeDropper = false,
		onAi2htmlDrop = () => {},
		onAi2htmlInput = () => {},
		onImageInput = () => {},
		onArtboardChange = () => {},
		onApplyShadowToAll = () => {},
		onApplyTextToSelected = () => {},
		onApplyTextToAll = () => {},
		onClearTextColors = () => {},
		onTextColorLive = () => {},
		onPickTextColor = () => {},
		onRecolorSelectedShadow = () => {},
		onClearSelectedShadow = () => {},
		onCopyCurrentShadow = () => {},
		onShadowColorLive = () => {},
		onPickShadowColor = () => {},
		onCssClassNameInput = () => {},
		onAddRuleToSheet = () => {},
		onCopyCssSheet = () => {},
		onClearCssSheet = () => {}
	} = $props();

	function handleDragOver(event) {
		event.preventDefault();
	}
</script>

<section class="panel toolbar">
	<div
		class="toolbar-row import-row"
		role="region"
		aria-label="ai2html import zone"
		ondragover={handleDragOver}
		ondrop={onAi2htmlDrop}
	>
		<div class="dropzone-inline">
			<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
				<path d="M0 0h24v24H0z" fill="none"></path>
				<path d="M5 20h14v-2H5zm7-16-5.5 5.5 1.42 1.42L11 8.84V16h2V8.84l3.08 3.08 1.42-1.42z"
				></path>
			</svg>
			<div>
				<strong>Drop Zone ai2html</strong>
				<small>Drop .html here or use the button below.</small>
			</div>
		</div>
		<div class="import-actions">
			<label class="tool-button" for="ai2html-input">Load ai2html</label>
			<input
				id="ai2html-input"
				name="ai2html"
				type="file"
				accept=".html,text/html"
				autocomplete="off"
				onchange={onAi2htmlInput}
			/>
			<label class="tool-button" for="image-input">Load Image</label>
			<input
				id="image-input"
				name="background-image"
				type="file"
				accept="image/*"
				autocomplete="off"
				onchange={onImageInput}
			/>
			<button type="button" class="tool-button sample-button" onclick={onLoadSample}>
				Load sample
			</button>
		</div>
		{#if htmlFileName || imageFileName}
			<p class="active-file">{htmlFileName || imageFileName}</p>
		{/if}
	</div>

	<div class="toolbar-row main-controls-row">
		{#if artboards.length > 1}
			<div class="artboard-switcher">
				<span class="artboard-label">Artboard</span>
				<div class="artboard-buttons">
					{#each artboards as artboard}
						<button
							type="button"
							class={`artboard-btn ${selectedArtboardId === artboard.id ? 'is-active' : ''}`}
							onclick={() => {
								selectedArtboardId = artboard.id;
								onArtboardChange({ currentTarget: { value: artboard.id } });
							}}
						>
							{artboard.name}
						</button>
					{/each}
				</div>
			</div>
		{/if}

		<p class="metric">Native Width: {stageWidth}px</p>

		<div class="quick-actions">
			<button type="button" onclick={onApplyShadowToAll} disabled={!labelsCount}
				>Apply Shadow to All</button
			>
			<button
				type="button"
				class={`preview-toggle ${previewOriginal ? 'is-active' : ''}`}
				onclick={() => (previewOriginal = !previewOriginal)}
				disabled={!labelsCount}
			>
				{previewOriginal ? 'Show Edited' : 'Show Original'}
			</button>
		</div>
	</div>
</section>

<section class="panel appearance-panel sticky-appearance">
	<div class="toolbar-row appearance-row">
		<div class="appearance-block">
			<h4>Text Color</h4>
			<div class="control-row">
				<label for="text-color">Picker</label>
				<input
					id="text-color"
					name="text-color"
					type="color"
					bind:value={textColor}
					oninput={onTextColorLive}
				/>
			</div>
			<div class="action-row">
				<button type="button" onclick={onApplyTextToSelected} disabled={!selectedLabel}
					>Apply to Selected</button
				>
				<button type="button" onclick={onApplyTextToAll} disabled={!labelsCount}
					>Apply to All</button
				>
				<button
					type="button"
					class="reset-button"
					onclick={onClearTextColors}
					disabled={!labelsCount}
				>
					<TrashIcon />
					Reset to Original
				</button>
				<button
					type="button"
					class="eyedropper"
					onclick={onPickTextColor}
					disabled={!canUseEyeDropper || !workspaceImage}
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path
							d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"
						></path>
					</svg>
					Sample Text
				</button>
			</div>
		</div>

		<div class="appearance-block">
			<h4>Shadow Color</h4>
			<div class="control-row">
				<label for="shadow-color">Picker</label>
				<input
					id="shadow-color"
					name="shadow-color"
					type="color"
					bind:value={shadowColor}
					oninput={onShadowColorLive}
				/>
			</div>
			<div class="action-row">
				<button type="button" onclick={onRecolorSelectedShadow} disabled={!selectedLabel}
					>Recolor Selected</button
				>
				<button
					type="button"
					class="reset-button"
					onclick={onClearSelectedShadow}
					disabled={!selectedLabel}
				>
					<TrashIcon />
					Reset Shadow
				</button>
				<button type="button" onclick={onCopyCurrentShadow} disabled={!activeShadow}
					>Copy CSS</button
				>
				<button
					type="button"
					class="eyedropper"
					onclick={onPickShadowColor}
					disabled={!canUseEyeDropper || !workspaceImage}
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path
							d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"
						></path>
					</svg>
					Sample Shadow
				</button>
			</div>
		</div>
	</div>

	{#if selectedLabel}
		<p class="selection-note">Selected: <strong>{selectedLabel.previewText}</strong></p>
	{/if}
</section>

<section class="panel css-sheet-panel">
	<details class="workflow-details">
		<summary>Illustrator Workflow</summary>
		<div class="workflow-content">
			<div class="workflow-intro">
				<p>
					ai2html adds a CSS class to each exported text based on the immediate parent layer name in
					Illustrator. This lets you target groups of text with specific rules for your needs.
				</p>
				<p>
					In this editor, define the class name, add rules one by one, and copy the entire CSS block
					at the end.
				</p>
			</div>

			<div class="css-sheet-block">
				<h4>Stylesheet</h4>
				<div class="control-row class-name-row">
					<label for="css-class-name">Class Name</label>
					<input
						id="css-class-name"
						name="css-class-name"
						type="text"
						value={cssClassName}
						oninput={onCssClassNameInput}
						placeholder="mylayer"
						autocomplete="off"
					/>
				</div>
				<p class="class-name-help">Letters and numbers only. No spaces or symbols.</p>

				<div class="action-row">
					<button type="button" onclick={onAddRuleToSheet} disabled={!cssClassNameValid}
						>Add to Stylesheet</button
					>
					<button type="button" onclick={onCopyCssSheet} disabled={!cssSheetPreview}
						>Copy CSS</button
					>
					<button
						type="button"
						class="reset-button"
						onclick={onClearCssSheet}
						disabled={!cssRules.length}>Clear Sheet</button
					>
				</div>

				{#if currentRulePreview}
					<pre class="css-preview">{currentRulePreview}</pre>
				{/if}

				<div class="css-rules-list" aria-live="polite">
					{#if cssSheetPreview}
						<pre class="css-rules-output">{cssSheetPreview}</pre>
					{:else}
						<p class="empty-rules">No rules added yet.</p>
					{/if}
				</div>
			</div>
		</div>
	</details>
</section>

<style>
	.panel {
		border: 0;
		padding: 0;
		background: transparent;
	}

	.toolbar {
		display: grid;
		gap: 0;
	}

	.toolbar-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.45rem;
	}

	.import-row {
		padding: 0.6rem 0.75rem;
		border-bottom: 1px solid var(--panel-border);
		background: transparent;
	}

	.import-actions {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.dropzone-inline {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.5rem;
		border: 1px dashed var(--brand-mid);
		background: #fff;
		min-height: 40px;
	}

	.dropzone-inline svg {
		width: 18px;
		height: 18px;
		fill: var(--brand-mid);
	}

	.dropzone-inline strong,
	.dropzone-inline small {
		display: block;
		font-size: 0.7rem;
		line-height: 1.2;
	}

	.dropzone-inline strong {
		font-size: 0.75rem;
	}

	.toolbar input[type='file'] {
		display: none;
	}

	.tool-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 32px;
		height: auto;
		padding: 0.35rem 0.6rem;
		border: 1px solid var(--brand-dark);
		background: var(--brand-dark);
		color: #fff;
		font-size: 0.69rem;
		font-weight: 600;
		line-height: 1.2;
		box-sizing: border-box;
		cursor: pointer;
		text-align: left;
	}

	.sample-button {
		border-color: var(--panel-border);
		background: transparent;
		color: var(--text-secondary);
	}

	.sample-button:hover {
		background: var(--app-bg);
		filter: none;
	}

	.active-file {
		font-size: 0.74rem;
		color: var(--text-secondary);
		word-break: break-word;
	}

	.main-controls-row {
		padding: 0.4rem 0.75rem;
		border-bottom: 1px solid var(--panel-border);
		gap: 0.45rem;
	}

	.metric {
		font-size: 0.72rem;
		color: var(--text-secondary);
	}

	.artboard-switcher {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.artboard-label {
		font-size: 0.72rem;
		color: var(--text-secondary);
	}

	.artboard-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.artboard-btn {
		padding: 0.25rem 0.5rem;
		font-size: 0.66rem;
		border: 1px solid var(--panel-border);
		background: var(--panel-bg);
		color: var(--text-primary);
		border-radius: 3px;
		white-space: nowrap;
	}

	.artboard-btn:hover {
		background: var(--app-bg);
	}

	.artboard-btn.is-active {
		background: var(--brand-dark);
		color: #fff;
		border-color: var(--brand-dark);
	}

	.metric {
		font-variant-numeric: tabular-nums;
	}

	.quick-actions,
	.action-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.appearance-panel {
		display: grid;
		gap: 0;
		padding: 0.7rem 0.75rem;
		border-bottom: 1px solid var(--panel-border);
	}

	.css-sheet-panel {
		display: grid;
		gap: 0;
		padding: 0.7rem 0.75rem;
	}

	.css-sheet-block {
		display: grid;
		gap: 0.35rem;
		border: 1px solid var(--panel-border);
		background: var(--app-bg);
		padding: 0.35rem;
	}

	.css-sheet-block h4 {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-primary);
	}

	.css-sheet-block p {
		margin: 0;
		font-size: 0.72rem;
		line-height: 1.35;
		color: var(--text-secondary);
	}

	.workflow-details {
		display: grid;
		gap: 0.35rem;
	}

	.workflow-details summary {
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-primary);
		font-weight: 700;
		cursor: pointer;
		list-style-position: inside;
	}

	.workflow-details summary:focus-visible {
		outline: 2px solid var(--brand-accent);
		outline-offset: 1px;
	}

	.workflow-content {
		display: grid;
		gap: 0.4rem;
		margin-top: 0.2rem;
	}

	.workflow-intro {
		display: grid;
		gap: 0.3rem;
	}

	.workflow-intro p {
		margin: 0;
		margin-left: 0.2rem;
		font-size: 0.72rem;
	}

	.class-name-row {
		align-items: center;
	}

	.class-name-row input {
		min-width: 170px;
		padding: 0.2rem 0.3rem;
		font-size: 0.75rem;
		border: 1px solid var(--panel-border);
		background: #fff;
	}

	.class-name-help {
		font-size: 0.69rem;
		color: var(--text-muted);
	}

	.css-preview {
		margin: 0;
		padding: 0.35rem;
		font-size: 0.7rem;
		line-height: 1.35;
		white-space: pre-wrap;
		word-break: break-word;
		border: 1px solid var(--panel-border);
		background: var(--app-bg);
	}

	.css-rules-list {
		display: grid;
		gap: 0.25rem;
		max-height: 130px;
		overflow: auto;
		padding: 0.15rem 0.1rem;
	}

	.css-rules-output {
		margin: 0;
		font-size: 0.7rem;
		line-height: 1.35;
		padding: 0.32rem 0.36rem;
		border: 1px solid var(--panel-border);
		background: var(--app-bg);
		color: var(--text-secondary);
		white-space: pre-wrap;
		word-break: break-word;
	}

	.empty-rules {
		font-size: 0.72rem;
		color: var(--text-muted);
	}

	.appearance-row {
		display: grid;
		gap: 0.6rem;
	}

	.appearance-block {
		display: grid;
		gap: 0.35rem;
		border: 0;
		background: transparent;
		padding: 0;
		flex: 1 1 auto;
	}

	.appearance-block + .appearance-block {
		padding-top: 0.55rem;
		border-top: 1px solid var(--panel-border);
	}

	.appearance-block h4 {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-primary);
	}

	.control-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}

	.control-row label,
	.selection-note {
		font-size: 0.72rem;
		color: var(--text-secondary);
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		border: 1px solid var(--panel-border);
		background: #fff;
		color: var(--text-secondary);
		padding: 0.24rem 0.34rem;
		font-size: 0.64rem;
		font-weight: 600;
		line-height: 1.2;
		cursor: pointer;
		touch-action: manipulation;
		border-radius: 4px;
		transition:
			border-color 120ms ease,
			color 120ms ease,
			background-color 120ms ease;
	}

	.action-row button:first-child {
		border-color: var(--brand-dark);
		background: var(--brand-dark);
		color: #fff;
	}

	button:hover,
	.tool-button:hover {
		background: var(--app-bg);
	}

	.tool-button:hover {
		background: var(--brand-dark);
		filter: brightness(1.06);
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	button:focus-visible,
	input:focus-visible,
	.tool-button:focus-visible {
		outline: 2px solid var(--brand-accent);
		outline-offset: 1px;
	}

	button.preview-toggle {
		background: transparent;
		font-size: 0.68rem;
	}

	button.preview-toggle.is-active {
		border-color: var(--brand-dark);
		color: var(--brand-dark);
	}

	.reset-button {
		background: #fff;
		border-color: var(--panel-border);
		color: var(--text-secondary);
	}

	.reset-button :global(svg) {
		width: 12px;
		height: 12px;
		fill: currentColor;
	}

	.eyedropper :global(svg) {
		width: 14px;
		height: 14px;
		fill: currentColor;
	}

	@media (max-width: 600px) {
		.import-row {
			display: grid;
			gap: 0.4rem;
		}

		.import-actions {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 0.4rem;
			width: 100%;
		}

		.import-actions .tool-button {
			justify-content: center;
			width: 100%;
		}

		.appearance-row {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			align-items: start;
		}

		.appearance-block + .appearance-block {
			padding-top: 0;
			border-top: 0;
		}
	}
</style>
