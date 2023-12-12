<script>
	import utils from '$lib/utils/utils';
	const { copyToClipboard } = utils;
	export let shadow;
	export let source;
	export let text;
	export let mainTextColor;
	export let leftGradColor;
	export let rightGradColor;
	$: style = `text-shadow: ${shadow}color: ${mainTextColor}`;
</script>

<div class="shadow-line">
	<div class="form-block">
		<a href={source}>Source</a>
	</div>
	<div
		class="shadow-block"
		style="background-image: linear-gradient(to right, {leftGradColor}, {rightGradColor});"
		title={source}
		on:click={() => copyToClipboard(`text-shadow: ${shadow}`)}
	>
		<p {style}>
			{text}
		</p>
	</div>
</div>

<style>
	.shadow-line {
		padding-bottom: 1.5rem;
		border: 1px solid rgb(250, 2550, 250);
		padding: 0.5rem;
		margin: 5px 0;
		border-radius: 2px;
		box-shadow: 0 1px 2px rgb(0 0 0 / 33%);
	}
	.shadow-block {
		user-select: none;
		font-family: monospace;
		color: white;
		cursor: pointer;
		background-image: linear-gradient(to right, #000000, #ffffff);
		padding: 0.3rem 0.5rem;
		border-radius: 2px;
		margin-top: 4px;
	}
	.form-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.form-block a {
		color: #bababa;
		font-size: 80%;
	}
	a[href] {
		text-decoration: none;
	}

</style>
