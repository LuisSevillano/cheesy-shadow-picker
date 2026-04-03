<script>
	let {
		label,
		isActive = false,
		buildLabelStyle,
		onSelect = () => {},
		onStartDrag = () => {}
	} = $props();
</script>

<button
	type="button"
	id={label.id}
	class={`draggable-label ${label.className || ''} ${isActive ? 'is-active' : ''} ${label.textColor ? 'has-custom-text' : ''} ${label.shadow ? 'has-custom-shadow' : ''}`}
	style={buildLabelStyle(label)}
	aria-label={`Text ${label.previewText}`}
	onfocus={() => onSelect(label.id)}
	onpointerdown={(event) => onStartDrag(event, label)}
>
	{@html label.html}
</button>

<style>
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
</style>
