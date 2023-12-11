<script>
	import ShadowBlock from '$lib/ShadowBlock.svelte';
	import shadows from '$lib/utils/stores';
	import { cheeses } from '$lib/utils/data';
	import Filters from './Filters.svelte';

	let mainTextColor = '#ffffff';
	let leftGradColor = '#000000';
	let rightGradColor = '#ffffff';
	let mainShadowColor = '#000000';
	let invert = false;
</script>

<Filters
	bind:invert
	bind:mainShadowColor
	bind:mainTextColor
	bind:leftGradColor
	bind:rightGradColor
/>

{#key $shadows}
{/key}
{#each $shadows as { shadow, source, id }, index (id)}
	<ShadowBlock
		{id}
		{mainTextColor}
		{leftGradColor}
		{rightGradColor}
		{shadow}
		{source}
		text={cheeses[index] || cheeses[0]}
	/>
{/each}

<style>
</style>
