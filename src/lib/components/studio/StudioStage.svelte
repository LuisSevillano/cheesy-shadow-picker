<script>
	import DraggableLabel from '$lib/components/studio/DraggableLabel.svelte';

	let {
		rootId = '',
		rootClassName = 'ai2html',
		selectedArtboard,
		workspaceImage,
		stageWidth,
		imageLoadError,
		labels = [],
		activeLabelId = '',
		buildLabelStyle,
		onSelectLabel = () => {},
		onStartDrag = () => {},
		onStagePointerDown = () => {},
		onImageLoad = () => {},
		onImageError = () => {},
		stageRef = $bindable()
	} = $props();
</script>

<div class="stage-host" style={`max-width:${stageWidth}px;`}>
	<div id={rootId || 'ai2html-root'} class={`${rootClassName || 'ai2html'} editor-root`}>
		{#if selectedArtboard}
			<div
				id={selectedArtboard.id}
				class={`${selectedArtboard.className || 'g-artboard'} editor-artboard`}
				style={selectedArtboard.style || ''}
				role="presentation"
				bind:this={stageRef}
				onpointerdown={onStagePointerDown}
			>
				{#if selectedArtboard.paddingStyle}
					<div style={selectedArtboard.paddingStyle}></div>
				{:else if imageLoadError}
					<div style={`padding: 0 0 ${100 / (selectedArtboard.aspectRatio || 1.6)}% 0;`}></div>
				{/if}
				<img
					id={selectedArtboard.imageId}
					class={selectedArtboard.imageClassName || 'g-aiImg'}
					src={workspaceImage}
					alt={selectedArtboard.imageAlt || 'Mapa de fondo'}
					loading="eager"
					fetchpriority="high"
					width={stageWidth}
					onload={onImageLoad}
					onerror={onImageError}
				/>

				{#each labels as label (label.id)}
					<DraggableLabel
						{label}
						isActive={activeLabelId === label.id}
						{buildLabelStyle}
						onSelect={onSelectLabel}
						{onStartDrag}
					/>
				{/each}
			</div>
		{:else}
			<div class="workspace-empty" role="region" aria-label="Drop zone for ai2html or image files">
				<img
					src={workspaceImage}
					alt="Editor background"
					loading="eager"
					fetchpriority="high"
					width={stageWidth}
					onerror={onImageError}
				/>
				{#each labels as label (label.id)}
					<DraggableLabel
						{label}
						isActive={activeLabelId === label.id}
						{buildLabelStyle}
						onSelect={onSelectLabel}
						{onStartDrag}
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.stage-host {
		position: sticky;
		top: 0;
		z-index: 1;
		width: 100%;
		background: var(--workspace-bg, #f5f5f5);
		padding: 0;
		box-sizing: border-box;
	}

	.editor-root {
		position: relative;
	}

	.editor-artboard,
	.image-stage {
		position: relative !important;
		display: block !important;
		width: 100% !important;
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

	@media (max-width: 979px) {
		.stage-host {
			max-width: 100%;
		}

		.workspace-empty {
			min-height: 120px;
			padding: 1rem 0.75rem;
		}
	}
</style>
