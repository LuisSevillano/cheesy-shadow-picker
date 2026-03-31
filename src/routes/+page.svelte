<script>
	import { onMount } from 'svelte';
	import Studio from '$lib/components/Studio.svelte';
	import sampleAi2htmlContent from '$lib/components/Ai2htmlSample.html?raw';

	let sampleLoaded = $state(false);

	onMount(() => {
		const url = new URL(window.location.href);
		if (url.searchParams.get('sample') === '1') {
			sampleLoaded = true;
		}
	});

	function loadSample() {
		sampleLoaded = true;
	}
</script>

<main id="main-content" class="page is-studio">
	<header class="topbar">
		<div class="brand">
			<div class="brand-mark">S</div>
			<div class="brand-copy">
				<p class="kicker">Cheesy Shadow Picker</p>
				<p class="version">2.0</p>
			</div>
		</div>
		<div class="top-divider" aria-hidden="true"></div>
	</header>

	<section class="studio-shell">
		<Studio sampleMode={sampleLoaded} sampleHtml={sampleAi2htmlContent} onLoadSample={loadSample} />
	</section>
</main>

<style>
	.page {
		display: grid;
		gap: 0.75rem;
	}

	.page.is-studio {
		max-width: none;
		margin: 0;
		padding: 0;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		gap: 0;
		overflow: hidden;
	}

	.topbar {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		height: 44px;
		padding: 0 1rem;
		border-bottom: 1px solid var(--panel-border);
		background: var(--toolbar-bg);
		flex-shrink: 0;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		flex-shrink: 0;
	}

	.brand-mark {
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		font-size: 0.72rem;
		font-weight: 800;
		background: var(--brand-dark);
		color: #fff;
	}

	.brand-copy {
		display: grid;
		gap: 0.08rem;
		line-height: 1;
	}

	.kicker,
	.version {
		margin: 0;
	}

	.kicker {
		font-size: 0.58rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.version {
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.top-divider {
		width: 1px;
		height: 20px;
		background: var(--panel-border);
	}

	.studio-shell {
		display: grid;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
</style>
