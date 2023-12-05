<script>
	import ColorPicker from '$lib/ColorPicker.svelte';
	export let mainTextColor;
	export let leftGradColor;
	export let rightGradColor;
</script>

<div class="form">
	<div class="filter">
		Global text color: <ColorPicker bind:color={mainTextColor} />
	</div>
	<div class="filter">
		Left gradient: <ColorPicker bind:color={leftGradColor} />
	</div>
	<div class="filter">
		Right gradient: <ColorPicker bind:color={rightGradColor} />
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	.form {
		margin: 0.5rem 0;
		display: flex;
		flex-direction: column;
		max-width: 165px;
	}
	.filter {
		margin-bottom: 0.25rem;
		display: flex;
		justify-content: space-between;
	}
</style>
