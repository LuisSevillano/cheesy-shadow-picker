<script>
	import { colors, resolutions } from '$lib/config';
	import Shadows from '$lib/Shadows.svelte';
</script>

<header>
	<h1>Chessie shadow picker</h1>
</header>
<main>
	<p>
		I have been collecting CSS's 'text-shadow' from media like The New York Times, Washington Post,
		Reuters Graphics, Propublica, Bloomberg or El País.
	</p>
	<p>
		The items are shown below in a list where you can change the text color or background among
		other options.
	</p>

	<Shadows />
</main>

<style>
	li {
		border-radius: 2px;
		padding: 0.25rem 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
	}
</style>
