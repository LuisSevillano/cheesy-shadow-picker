<script>
	import ColorPicker from '$lib/ColorPicker.svelte';
	export let mainTextColor;
	export let leftGradColor;
	export let rightGradColor;
</script>

<div class="form">
	<div class="filter">
		<ColorPicker bind:color={mainTextColor} label={'Global text color'} />
	</div>
	<div class="filter">
		<ColorPicker bind:color={leftGradColor} label={'Left gradient'} />
	</div>
	<div class="filter">
		<ColorPicker bind:color={rightGradColor} label={'Right gradient'} />
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	.form {
		position: sticky;
		top: 0px;
		margin: 0.5rem 0;
		padding: 1rem 1rem;
		display: flex;
		flex-direction: column;
		background-color: #eee;
		outline: 1px solid black;
		border-radius: 0 0 2px 2px;
	}
	@media (min-width: 380px) {
		.form {
			/* max-width: 165px; */
			flex-direction: row;
		}
	}
	.filter {
		margin-bottom: 0.25rem;
		display: flex;
		justify-content: space-between;
		margin-right: 1rem;
	}
</style>
