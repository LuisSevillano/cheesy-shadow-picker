<script>
	import Shadows from '$lib/Shadows.svelte';
	import { siteTitle, siteDescription } from '$lib/config';
	import Drop from '$lib/Drop.svelte';
</script>

<main>
	<header>
		<h1>{siteTitle}</h1>
		<h3>{siteDescription}</h3>
	</header>

	<Shadows />
	<p>
		Optionally, you can upload an image, for example a satellite image or a map, to find the shadow
		that best suits your needs.
	</p>
	<Drop />
	<div>
		<p>
			This shadows have been collected from media like The New York Times, Washington Post, Reuters
			Graphics, Propublica, Bloomberg or El País. Some of them have been slightly modified to fit
			the default black/white scheme. This feature is especially useful in combination with <a
				href="http://ai2html.org/">ai2html</a
			> or for highlighting text on any kind of graphic, map or photo.
		</p>
		<p>
			You can change text color or shadow color, the background or even invert that configuration.
			Click on a shadow block to copy that shadow to your clipboard.
		</p>
		<p>
			Feel free to suggest your own shadows to make this collection bigger or make a <a
				href="https://github.com/luissevillano/cheesy-shadow-picker">fork</a
			> to improve it.
		</p>
	</div>
</main>

<style>
	header {
		padding: 1rem 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		position: relative;
		margin-bottom: 2rem;
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
		text-shadow:
			0px 0px 1px #ffffff,
			0px 0px 2px #ffffff,
			0px 0px 3px #ffffff,
			0px 0px 4px #ffffff;
	}
	h3 {
		font-weight: lighter;
	}
	main::before {
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
	div {
		border-top: 1px solid rgb(200, 200, 200);
		margin-top: 2rem;
	}
</style>
