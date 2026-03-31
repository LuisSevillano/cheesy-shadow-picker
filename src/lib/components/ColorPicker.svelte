<script>
	let {
		color = $bindable('#000000'),
		label = '',
		name = '',
		disabled = false,
		onInput = () => {},
		onChange = () => {}
	} = $props();

	let inputName = $derived(name || label.toLowerCase().replace(/\s+/g, '-'));
</script>

<label>
	{label}:
	<input
		oninput={onInput}
		onchange={onChange}
		style="height:20px;width:30px;"
		type="color"
		name={inputName}
		autocomplete="off"
		bind:value={color}
		{disabled}
	/>
</label>

<style>
	input {
		margin-left: 0.25rem;
	}
</style>
