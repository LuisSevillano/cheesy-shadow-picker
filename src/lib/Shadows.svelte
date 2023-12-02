<script>
	import data from '$lib/utils/data';
	import Shadow from '$lib/Shadow.svelte';
	import ColorPicker from '$lib/ColorPicker.svelte';
	const { cheeses, shadows } = data;
	let mainTextColor = '#ffffff';
</script>

<div class="form">
	Global text color: <ColorPicker bind:color={mainTextColor} />
</div>

{#each shadows as data, i}
	<Shadow {mainTextColor} {data} text={cheeses[i || 0]} />
{/each}

<style>
</style>
