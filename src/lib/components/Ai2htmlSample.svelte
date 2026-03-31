<script>
	let { onLoad = () => {} } = $props();
</script>

<button type="button" class="sample-trigger" onclick={onLoad}> Try a sample </button>

<style>
	.sample-trigger {
		display: inline;
		border: none;
		background: transparent;
		color: var(--brand-accent);
		font-size: 0.75rem;
		font-weight: 400;
		cursor: pointer;
		padding: 0;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.sample-trigger:hover {
		color: var(--brand-dark);
	}

	.sample-trigger:focus-visible {
		outline: 2px solid var(--brand-accent);
		outline-offset: 2px;
	}
</style>
