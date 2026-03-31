<script>
	import { fade } from 'svelte/transition';
	import { image } from '$lib/utils/stores';

	let isDragging = $state(false);
	let files = $state();
	let fileMetadata = $state();
	let isValidFile = $state(true);
	let isUploaded = $state(false);
	let loading = $state(false);

	$effect(() => {
		if (!files) {
			return;
		}

		const [file] = files;
		readFile(file);
	});

	function resetImage() {
		image.set('');
		isUploaded = false;
		isValidFile = true;
		fileMetadata = undefined;
	}

	function handleDragOver(event) {
		event.preventDefault();
	}

	function handleDragEnter() {
		isDragging = true;
	}

	function handleDragLeave() {
		isDragging = false;
	}

	function dropped(event) {
		event.preventDefault();
		event.stopPropagation();
		isDragging = false;
		const [file] = event.dataTransfer.files;
		readFile(file);
	}

	function readFile(file) {
		if (!file) {
			return;
		}

		const reader = new FileReader();
		if (file.type.match('image')) {
			isValidFile = true;
			loading = true;
			reader.onload = () => {
				isUploaded = true;
				fileMetadata = file;
				image.set(reader.result);
				loading = false;
			};

			reader.readAsDataURL(file);

			return;
		} else {
			isUploaded = false;
			isValidFile = false;
		}
	}
</script>

<div class="data-input">
	<form
		ondragover={handleDragOver}
		ondragenter={handleDragEnter}
		ondragleave={handleDragLeave}
		ondrop={dropped}
		class={['drag', isDragging ? 'is-dragging' : ''].join(' ')}
		method="post"
		enctype="multipart/form-data"
	>
		<div class={['drag-input', isUploaded ? 'is-uploaded' : ''].join(' ')}>
			<input
				id="file"
				name="background-image"
				class="drag-file"
				accept="image/*"
				autocomplete="off"
				bind:files
				type="file"
			/>
			<label for="file">
				{#if isValidFile && !isUploaded}
					<div class="drag-callout">
						<div class="drag-callout-title">
							{#if loading}
								<div out:fade={{ duration: 1000 }} class="loading-msg" aria-live="polite">
									Loading…
								</div>
							{:else}
								<svg
									class="drag-icon"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									focusable="false"
									height="24"
									viewBox="0 0 24 24"
									width="24"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
								</svg>
								<div>Drop your image or <span class="underline">select it</span></div>
							{/if}
						</div>
					</div>
				{:else if isUploaded}
					<div>
						<div class="drag-filename">{fileMetadata.name}</div>
						<button
							type="button"
							onclick={(event) => {
								event.preventDefault();
								resetImage();
							}}
						>
							Remove
						</button>
					</div>
				{:else}
					<div class="drag-error-title">Error while reading the file</div>
					<div class="drag-error-hint">please upload a valid image</div>
				{/if}
			</label>
		</div>
	</form>
</div>

<style>
	label svg + div {
		display: block;
	}
	.data-input {
		margin: 1rem 0;
	}
	.drag {
		text-align: center;
		outline: 1px dashed var(--grey-stroke);
		background-color: var(--grey-bg);
		position: relative;
		transition:
			outline-offset 0.15s ease-in-out,
			background-color 0.15s linear;
	}
	.drag:hover,
	.drag.is-dragging {
		outline: 1px dashed black;
	}
	label {
		overflow: hidden;
		position: relative;
		box-sizing: border-box;
		padding: 0.5rem;
		width: 100%;
		height: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	label div {
		display: flex;
		align-items: center;
	}

	.drag-callout {
		z-index: 1;
	}
	.drag-callout-title {
		display: flex;
		align-items: center;
	}

	.small-note {
		position: absolute;
		bottom: 1rem;
		color: var(--grey-text);
		font-size: small;
	}
	.drag-file {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}
	.drag-filename {
		pointer-events: none;
		font-weight: 500;
		margin: 0 0.25rem;
	}
	.drag-filesize {
		pointer-events: none;
		margin-top: 0.25rem;
		color: var(--grey-text);
		font-size: small;
	}
	.drag-success {
		height: 100px;
	}
	.underline {
		text-decoration: underline;
	}
	.error {
		position: relative;
		overflow: hidden;
		text-align: center;
		padding: 5rem;
		background: #f8f8f8;
	}
	.drag-error-title {
		font-weight: 500;
	}
	.drag-error-hint {
		margin-top: 0.25rem;
		color: var(--grey-text);
	}
	@keyframes show {
		30% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
	button {
		background-color: white;
		color: darkred;
	}

	button:hover {
		outline-color: black;
	}
</style>
