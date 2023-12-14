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

	$: list = $image !== '';
</script>

<div class="shadows">
	<Filters
		bind:invert
		bind:mainShadowColor
		bind:mainTextColor
		bind:leftGradColor
		bind:rightGradColor
	/>

	<div class="shadows-list" style={bgImage}>
		{#each $shadows as { shadow, source, id }, index (id)}
			<div class:list class="shadow-item">
				<ShadowBlock
					imageMode={list}
					{id}
					{mainTextColor}
					{leftGradColor}
					{rightGradColor}
					{shadow}
					{source}
					text={cheeses[index] || cheeses[0]}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.shadows-list {
		background-position: center;
		background-size: cover;
		display: flex;
		flex-wrap: wrap;
	}
	.list {
		padding: 0.5rem;
	}
	.shadow-item {
		flex-grow: 1;
	}
	@media (min-width: 830px) {
		.list {
			padding: 1rem;
		}
	}
</style>
