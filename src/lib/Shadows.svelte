<script>
	import data from '$lib/utils/data';
	import Shadow from '$lib/Shadow.svelte';

	import Filters from './Filters.svelte';
	const { cheeses, shadows } = data;

	let mainTextColor = '#ffffff';
	let leftGradColor = '#000000';
	let rightGradColor = '#ffffff';
</script>

<Filters bind:mainTextColor bind:leftGradColor bind:rightGradColor />

{#each shadows as data, i}
	<Shadow {mainTextColor} {leftGradColor} {rightGradColor} {data} text={cheeses[i || 0]} />
{/each}

<style>
</style>
