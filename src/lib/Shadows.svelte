<script>
	import ShadowBlock from '$lib/ShadowBlock.svelte';
	import shadows, { image } from '$lib/utils/stores';
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
	$: bgImage = `background-image: url("${$image}");`;
</script>

<Filters
	bind:invert
	bind:mainShadowColor
	bind:mainTextColor
	bind:leftGradColor
	bind:rightGradColor
/>

<div class="shadows" style={bgImage}>
	{#each $shadows as { shadow, source, id }, index (id)}
		<ShadowBlock
			imageLoaded={$image !== ''}
			{id}
			{mainTextColor}
			{leftGradColor}
			{rightGradColor}
			{shadow}
			{source}
			text={cheeses[index] || cheeses[0]}
		/>
	{/each}
</div>

<style>
	.shadows {
		background-position: center;
		background-size: contain;
	}
</style>
