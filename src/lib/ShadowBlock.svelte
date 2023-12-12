<script>
	import { fade } from 'svelte/transition';
	import utils from '$lib/utils/utils';
	const { copyToClipboard } = utils;
	export let id;
	export let shadow;
	export let source;
	export let text;
	export let mainTextColor;
	export let leftGradColor;
	export let rightGradColor;
	$: style = `text-shadow: ${shadow}color: ${mainTextColor}`;
	let copyMessageVisible = false;

	function clickEvent(shadow) {
		copyToClipboard(`text-shadow: ${shadow}`);
		copyMessageVisible = true;
		setTimeout(() => {
			copyMessageVisible = false;
		}, 1000);
	}
</script>

<div class="shadow-line" on:click={() => clickEvent(shadow)}>
	<p>{id}</p>
	<div
		class="shadow-block"
		style="background-image: linear-gradient(to right, {leftGradColor}, {rightGradColor});"
		title={source}
	>
		<p {style}>
			{text}
		</p>
	</div>
	<div class="form-block">
		<a href={source}>Source</a>
		{#if copyMessageVisible}
			<span out:fade={{ duration: 1000 }}>Copied!</span>
		{/if}
	</div>
</div>

<style>
	.shadow-line {
		padding-bottom: 1.5rem;
		border: 1px solid rgb(250, 250, 250);
		padding: 0.5rem;
		margin: 5px 0;
		border-radius: 2px;
		box-shadow: 0 1px 2px rgb(0 0 0 / 33%);
		cursor: pointer;
	}
	.shadow-line:hover {
		box-shadow: 0 1px 2px rgb(0 0 0 / 66%);
	}
	.shadow-block {
		user-select: none;
		font-family: monospace;
		color: white;
		background-image: linear-gradient(to right, #000000, #ffffff);
		padding: 0.3rem 0.5rem;
		border-radius: 2px;
		margin-top: 4px;
	}
	.form-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.5rem;
	}
	.form-block a,
	span {
		color: #bababa;
		font-size: 80%;
	}
	.form-block span {
		color: black;
	}
	a[href] {
		text-decoration: none;
	}
	p {
		margin: 0;
	}
</style>
