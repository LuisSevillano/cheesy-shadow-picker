<script>
	import isReversible from '$lib/utils/isReversible';

	export let data;
	export let text;
	export let mainTextColor;
	export let leftGradColor;
	export let rightGradColor;

	let shadow;
	let customColor;

	function invertColor(hex) {
		if (hex.indexOf('#') === 0) {
			hex = hex.slice(1);
		}
		// convert 3-digit hex to 6-digits.
		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		if (hex.length !== 6) {
			throw new Error('Invalid HEX color.');
		}
		// invert color components
		var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
			g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
			b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
		// pad each with zeros and return
		return (
			'#' + String(r).padStart(2, '0') + String(g).padStart(2, '0') + String(b).padStart(2, '0')
		);
	}

	function extractHexFromString(str) {
		const parts = str.split('#');
		return `#${parts[1].substring(0, 6)}`;
	}

	function invertShadow(e, data) {
		const bool = e.srcElement.checked;
		if (bool === false) {
			customColor = undefined;
			shadow = undefined;
		} else {
			const shadowColor = extractHexFromString(data);
			const invert = invertColor(shadowColor);
			customColor = shadowColor;
			const regex = new RegExp(shadowColor, 'gi');
			shadow = data.replace(regex, invert);
			console.log({ customColor, shadow });
		}
	}

	async function copyToClipboard(textToCopy) {
		// Navigator clipboard api needs a secure context (https)
		if (navigator.clipboard && window.isSecureContext) {
			await navigator.clipboard.writeText(textToCopy);
		} else {
			// Use the 'out of viewport hidden text area' trick
			const textArea = document.createElement('textarea');
			textArea.value = textToCopy;

			// Move textarea out of the viewport so it's not visible
			textArea.style.position = 'absolute';
			textArea.style.left = '-999999px';

			document.body.prepend(textArea);
			textArea.select();

			try {
				document.execCommand('copy');
			} catch (error) {
				console.error(error);
			} finally {
				textArea.remove();
			}
		}
	}
</script>

<div class="shadow-line">
	<div class="form-block">
		<a href={data.source}>Source</a>
		<label disabled={isReversible(data.shadow)}
			>Invert<input
				type="checkbox"
				name=""
				on:click={(e) => invertShadow(e, data.shadow)}
				disabled={isReversible(data.shadow)}
			/></label
		>
	</div>
	<div
		class="shadow-block"
		style="background-image: linear-gradient(to right, {leftGradColor}, {rightGradColor});"
		title={data.source}
		on:click={() => copyToClipboard(`text-shadow: ${data.shadow}`)}
	>
		<p style="text-shadow:{shadow || data.shadow};color:{customColor || mainTextColor}">
			{text}"
		</p>
	</div>
</div>

<!-- markup (zero or more items) goes here -->

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
	label {
		display: flex;
	}
	label[disabled='true'] {
		color: lightgray;
	}
</style>
