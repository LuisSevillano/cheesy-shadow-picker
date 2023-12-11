<script>
	export let color = '#000000';
	export let label = '';
	export let disabled = false;
</script>

<label {disabled}
	>{label}:
	<input
		on:input
		style="height:20px;width:30px;"
		type="color"
		bind:value={color}
		{disabled}
	/></label
>

<style>
	input {
		margin-left: 0.25rem;
	}
</style>
