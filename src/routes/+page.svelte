<script>
	import Shadows from '$lib/Shadows.svelte';
	import { siteDescription } from '$lib/config';
</script>

<header>
	<h1>Chessie shadow picker</h1>
	<h3>{siteDescription}</h3>
</header>
<main>
	<p>
		This shadows have been collected from media like The New York Times, Washington Post, Reuters
		Graphics, Propublica, Bloomberg or El País. Some of them have been slightly modified to fit the
		default black/white scheme. This feature is especially useful in combination with <a
			href="http://ai2html.org/">ai2html</a
		> or for highlighting text on any kind of graphic, map or photo.
	</p>
	<p>
		The shadows are shown below in a list where you can change text color or shadow color, the
		background or even invert that configuration.
	</p>

	<Shadows />
</main>

<style>
	header {
		padding: 1rem 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		position: relative;
		border-bottom: 1px solid gray;
		max-width: 50rem;
		margin: 0 auto;
		width: 90%;
	}
	@media (min-width: 830px) {
		header {
			width: auto;
		}
	}
	h1,
	h3 {
		display: block;
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
		text-shadow: 0px 0px 1px #ffffff, 0px 0px 2px #ffffff, 0px 0px 3px #ffffff, 0px 0px 4px #ffffff;
	}
	h3 {
		font-weight: lighter;
	}
	header::before {
		content: '';
		background-image: url(/cheese.svg);
		background-repeat: no-repeat;
		overflow: visible;
		width: 250px;
		height: 100px;
		position: absolute;
		right: 0px;
		top: 0px;
		z-index: -1;
	}
</style>
