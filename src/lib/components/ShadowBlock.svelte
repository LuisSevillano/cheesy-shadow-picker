<script>
	import { fade } from 'svelte/transition';

	import utils from '$lib/utils/utils';
	const { copyToClipboard } = utils;
	export let id;
	export let imageMode = false;
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

<div
	class="shadow-line {imageMode && 'image-mode'}"
	style={imageMode ? `${style}` : ''}
	on:click={() => clickEvent(shadow)}
>
	<p>{id}</p>
	{#if !imageMode}
		<div
			class="shadow-block"
			style={`background-image: linear-gradient(to right, ${leftGradColor}, ${rightGradColor});`}
			title={source}
		>
			<p {style}>
				{text}
			</p>
		</div>
	{/if}
	<div class="form-block">
		<a href={source}>Source</a>
		{#if copyMessageVisible}
			<span out:fade={{ duration: 1000 }}>Copied!</span>
		{/if}
	</div>
</div>

<style>
	.image-mode.shadow-line {
		border-radius: 0;
		border: none;
		/* border-top: 2px solid rgb(250, 250, 250); */
		box-shadow: none;
	}
	.image-mode .shadow-block {
		padding: 0;
	}
	.shadow-line {
		padding-bottom: 1.5rem;
		border: 1px solid rgb(250, 250, 250);
		padding: 0.5rem;
		margin: 5px 0;
		border-radius: 2px;
		box-shadow: 0 1px 2px rgb(0 0 0 / 33%);
		cursor: pointer;
	}
	.shadow-line:not(.image-mode):hover {
		box-shadow: 0 1px 2px rgb(0 0 0 / 66%);
	}
	.shadow-block {
		user-select: none;
		font-family: monospace;
		color: white;
		padding: 0.3rem 0.5rem;
		border-radius: 2px;
		margin-top: 4px;
	}
	.form-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.shadow-line:not(.image-mode) .form-block {
		margin-top: 0.5rem;
	}
	.form-block a,
	span {
		font-size: 70%;
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
