<script>
	import StudioStage from '$lib/components/studio/StudioStage.svelte';

	let {
		parseError = '',
		workspaceImage = '',
		isDragOver = false,
		imageLoadError = '',
		selectedArtboard,
		rootId = '',
		rootClassName = 'ai2html',
		labels = [],
		activeLabelId = '',
		stageWidth = 1200,
		buildLabelStyle,
		onDragOver = () => {},
		onWorkspaceDragOver = () => {},
		onWorkspaceDragLeave = () => {},
		onDrop = () => {},
		onStagePointerDown = () => {},
		onSelectLabel = () => {},
		onStartDrag = () => {},
		onImageLoad = () => {},
		onImageError = () => {},
		workspaceColumnRef = $bindable(),
		stageRef = $bindable()
	} = $props();
</script>

<div
	class={`workspace-column ${isDragOver ? 'is-dragover' : ''}`}
	bind:this={workspaceColumnRef}
	role="region"
	aria-label="Main workspace drop zone"
	ondragover={onWorkspaceDragOver}
	ondragleave={onWorkspaceDragLeave}
	ondrop={onDrop}
>
	{#if parseError}
		<p class="error">{parseError}</p>
	{/if}

	<div
		class={`workspace-shell ${isDragOver ? 'is-dragover' : ''}`}
		role="region"
		aria-label="Workspace drop zone"
		ondragover={onWorkspaceDragOver}
		ondragleave={onWorkspaceDragLeave}
		ondrop={onDrop}
	>
		{#if workspaceImage}
			<div class="workspace-scroll">
				{#if imageLoadError}
					<p class="image-warning" role="alert">{imageLoadError}</p>
				{/if}
				<StudioStage
					{rootId}
					{rootClassName}
					{selectedArtboard}
					{workspaceImage}
					{stageWidth}
					{imageLoadError}
					{labels}
					{activeLabelId}
					{buildLabelStyle}
					{onSelectLabel}
					{onStartDrag}
					{onStagePointerDown}
					{onImageLoad}
					{onImageError}
					bind:stageRef
				/>
			</div>
		{:else}
			<div
				class="workspace-empty"
				role="region"
				aria-label="Drop zone for ai2html or image files"
				ondragover={onDragOver}
				ondrop={onDrop}
			>
				<svg
					class="empty-icon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="17 8 12 3 7 8"></polyline>
					<line x1="12" y1="3" x2="12" y2="15"></line>
				</svg>
				<p>Drag & drop your ai2html or image file here</p>
				<p class="empty-hint">or use the buttons in the toolbar</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.workspace-column.is-dragover,
	.workspace-column.is-dragover {
		background: color-mix(in srgb, var(--canvas-bg) 88%, white 12%);
	}

	.workspace-column {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 0;
		align-content: start;
		min-width: 0;
		min-height: 0;
		overflow: hidden;
	}

	.workspace-shell {
		display: flex;
		flex-direction: column;
		border: 0;
		background: transparent;
		padding: 0;
		min-height: 0;
		overflow: auto;
	}

	.workspace-shell.is-dragover {
		outline: 2px dashed var(--brand-mid);
		outline-offset: -3px;
		background: hsl(var(--card));
	}

	.workspace-scroll {
		overflow: auto;
		height: 100%;
		padding: 0.5rem;
	}

	.image-warning {
		margin: 0 0 0.5rem;
		padding: 0.45rem 0.55rem;
		border: 1px solid #cf8d8d;
		background: #fff1f1;
		color: #7a2f2f;
		font-size: 0.74rem;
		line-height: 1.3;
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

	.error {
		margin: 0.75rem 0.75rem 0;
		padding: 0.55rem;
		border: 1px solid #c7a2a2;
		background: #fff1f1;
		color: #7d3e3e;
	}

	@media (max-width: 979px) {
		.workspace-column {
			min-height: clamp(140px, 28vh, 280px);
			order: 0;
		}

		.workspace-scroll {
			max-height: 40vh;
			overflow: auto;
			padding: 0.5rem;
		}

		.workspace-empty {
			min-height: 120px;
			padding: 1rem 0.75rem;
		}
	}
</style>
