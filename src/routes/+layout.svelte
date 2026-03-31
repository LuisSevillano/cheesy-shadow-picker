<script>
	import './app.css';
	import Meta from '$lib/components/Meta.svelte';
</script>

<a class="skip-link" href="#main-content">Skip to main content</a>
<Meta />
<slot />

<style>
	.skip-link {
		position: absolute;
		left: 0.4rem;
		top: -3rem;
		padding: 0.35rem 0.5rem;
		background: #1e2d49;
		color: #fff;
		z-index: 5;
	}

	.skip-link:focus-visible {
		top: 0.4rem;
	}
</style>
