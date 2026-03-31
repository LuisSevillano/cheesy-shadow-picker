<script>
	import shadowsCatalog from '$lib/utils/data';
	import { recolorShadow } from '$lib/utils/studioHelpers';

	let {
		selectedShadowRaw = '',
		shadowColor = '#000000',
		textColor = '#ffffff',
		selectedShadowMeta = null,
		onChooseShadow = () => {}
	} = $props();
</script>

<aside class="library-column">
	<div class="library-header-panel">
		<h3>Shadow Library</h3>
		<p>The main collection: choose and apply.</p>
	</div>

	<div class="library-list-panel">
		{#each shadowsCatalog as shadowItem}
			<button
				type="button"
				class={`shadow-choice ${selectedShadowRaw === shadowItem.shadow ? 'is-selected' : ''}`}
				onclick={() => onChooseShadow(shadowItem.shadow)}
			>
				<span class="shadow-name">{shadowItem.id}</span>
				<span
					class="shadow-preview"
					style={`text-shadow:${recolorShadow(shadowItem.shadow, shadowColor)};color:${textColor};`}
				>
					Preview
				</span>
				{#if selectedShadowRaw === shadowItem.shadow && shadowItem.source}
					<span class="source-wrap">
						<a class="shadow-source" href={shadowItem.source} target="_blank" rel="noreferrer">
							View reference
						</a>
					</span>
				{/if}
			</button>
		{/each}
	</div>
</aside>

<style>
	.library-column {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--sidebar-bg);
	}

	.library-header-panel {
		display: grid;
		gap: 0.2rem;
		padding: 0.7rem 0.75rem;
		border-bottom: 1px solid var(--panel-border);
	}

	.library-header-panel h3 {
		margin: 0;
	}

	.library-header-panel p {
		margin: 0;
		font-size: 0.8rem;
		color: var(--text-secondary);
	}

	.library-list-panel {
		flex: 1;
		overflow: auto;
	}

	button {
		font-size: 0.69rem;
		font-weight: 600;
		line-height: 1.2;
		cursor: pointer;
		text-decoration: none;
		touch-action: manipulation;
		border-radius: 4px;
		transition: background-color 120ms ease;
	}

	button:hover {
		background: var(--app-bg);
	}

	button:focus-visible {
		outline: 2px solid var(--brand-accent);
		outline-offset: 1px;
	}

	.shadow-choice {
		display: flex;
		flex-direction: column;
		gap: 0.18rem;
		text-align: left;
		border: 0;
		border-bottom: 1px solid var(--panel-border);
		border-left: 2px solid transparent;
		background: var(--sidebar-bg);
		color: var(--text-primary);
		width: 100%;
		padding: 0.6rem 0.75rem;
		border-radius: 0;
		min-height: 48px;
		touch-action: manipulation;
	}

	.shadow-choice:hover {
		background: var(--app-bg);
	}

	.shadow-choice.is-selected {
		border-left-color: var(--brand-dark);
		background: #fff;
	}

	.shadow-name {
		display: block;
		font-size: 0.8rem;
		font-weight: 700;
	}

	.shadow-preview {
		display: block;
		font-size: 0.72rem;
		line-height: 1.2;
		font-family: 'JetBrains Mono', 'Consolas', monospace;
	}

	.source-wrap {
		display: block;
		margin-top: 0.15rem;
	}

	.shadow-source {
		font-size: 0.65rem;
		color: #b0b1b3;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	@media (min-width: 980px) {
		.library-column {
			min-height: 0;
		}
	}
</style>
