<script>
	import { fade } from 'svelte/transition';

	import utils from '$lib/utils/utils';
	const { copyToClipboard } = utils;

	let {
		id,
		imageMode = false,
		shadow,
		source,
		text,
		mainTextColor,
		leftGradColor,
		rightGradColor
	} = $props();

	let style = $derived(`text-shadow: ${shadow}; color: ${mainTextColor};`);
	let copyMessageVisible = $state(false);

	function clickEvent(shadow) {
		copyToClipboard(`text-shadow: ${shadow}`);
		copyMessageVisible = true;
		setTimeout(() => {
			copyMessageVisible = false;
		}, 1000);
	}
</script>

<div class="shadow-line {imageMode && 'image-mode'}">
	<button
		type="button"
		class="shadow-copy"
		style={imageMode ? `${style}` : ''}
		onclick={() => clickEvent(shadow)}
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
	</button>
	<div class="form-block">
		<a
			href={source}
			onclick={(event) => {
				event.stopPropagation();
			}}
		>
			Source
		</a>
		{#if copyMessageVisible}
			<span aria-live="polite" out:fade={{ duration: 1000 }}>Copied!</span>
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
		border: 1px solid rgb(250, 250, 250);
		padding: 0.5rem;
		margin: 5px 0;
		border-radius: 2px;
		box-shadow: 0 1px 2px rgb(0 0 0 / 33%);
	}
	.shadow-copy {
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		width: 100%;
		text-align: left;
		cursor: pointer;
	}
	.shadow-line:not(.image-mode):hover {
		box-shadow: 0 1px 2px rgb(0 0 0 / 66%);
	}
	.shadow-copy:focus-visible {
		outline: 2px solid #2c60df;
		outline-offset: 2px;
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
