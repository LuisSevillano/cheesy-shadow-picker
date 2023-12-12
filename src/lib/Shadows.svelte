<script>
	import ShadowBlock from '$lib/ShadowBlock.svelte';
	import shadows from '$lib/utils/stores';
	import { cheeses } from '$lib/utils/data';
	import {
		mainTextColorDef,
		leftGradColorDef,
		rightGradColorDef,
		mainShadowColorDef
	} from '$lib/config';

	import Filters from './Filters.svelte';

	let mainTextColor = mainTextColorDef;
	let leftGradColor = leftGradColorDef;
	let rightGradColor = rightGradColorDef;
	let mainShadowColor = mainShadowColorDef;
	let invert = false;
</script>

<Filters
	bind:invert
	bind:mainShadowColor
	bind:mainTextColor
	bind:leftGradColor
	bind:rightGradColor
/>

{#each $shadows as { shadow, source, id }, index (id)}
	<ShadowBlock
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
