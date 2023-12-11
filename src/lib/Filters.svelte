<script>
	import ColorPicker from '$lib/ColorPicker.svelte';
	import shadows from '$lib/utils/stores';

	export let mainTextColor;
	export let mainShadowColor;
	export let leftGradColor;
	export let rightGradColor;
	export let invert = false;

	function updateTextAppearance() {
		updateShadows();
		updateTexts();
		updateMainShadowColor();
	}

	function updateMainShadowColor() {
		mainShadowColor = invertColor(mainShadowColor);
	}
	function updateTexts() {
		mainTextColor = invertColor(mainTextColor);
	}

	function updateShadowColor() {
		const newShadows = [...$shadows].map((d, i) => {
			d.shadow = replaceShadowColor(d.shadow);
			return d;
		});

		shadows.update(() => newShadows);
	}

	function updateShadows() {
		const newShadows = [...$shadows].map((d, i) => {
			if (d.shadowSource === undefined) {
				d.shadowSource = d.shadow;
			}
			if (invert === false) {
				d.shadow = invertShadowColor(d.shadow);
			} else {
				d.shadow = d.shadowSource;
			}
			return d;
		});

		shadows.update(() => newShadows);
		invert = !invert;
	}

	function hexToRgb(hex) {
		// Remove '#' if present
		hex = hex.replace('#', '');

		// Handle shorthand hex values (e.g., #f00)
		if (hex.length === 3) {
			hex = hex
				.split('')
				.map(function (char) {
					return char + char;
				})
				.join('');
		}

		// Parse hex to RGB
		var bigint = parseInt(hex, 16);
		var r = (bigint >> 16) & 255;
		var g = (bigint >> 8) & 255;
		var b = bigint & 255;

		return [r, g, b];
	}

	function replaceShadowColor(shadow) {
		const colorForReplacing = mainShadowColor;
		const colors = shadow.match(/#[0-9a-fA-F]{3,6}|rgb\(\d+\s+\d+\s+\d+\s*\/\s*\d+(\.\d+)?%?\)/g);

		if (!colors) return null;

		const invertColors = colors.map((color) => {
			if (color.startsWith('#')) {
				return colorForReplacing;
			} else if (color.startsWith('rgb')) {
				const values = color.match(/\d+(\.\d+)?%?/g);
				const alpha = values.pop();
				const [r, g, b] = hexToRgb(colorForReplacing);
				return `rgb(${r} ${g} ${b} / ${alpha})`;
			}
		});

		let result = shadow;
		colors.forEach((color, index) => {
			result = result.replace(color, invertColors[index]);
		});

		return result;
	}

	function invertShadowColor(shadow) {
		const colors = shadow.match(/#[0-9a-fA-F]{3,6}|rgb\(\d+\s+\d+\s+\d+\s*\/\s*\d+(\.\d+)?%?\)/g);

		if (!colors) return null;

		const invertColors = colors.map((color) => {
			if (color.startsWith('#')) {
				return '#' + (0xffffff - parseInt(color.slice(1), 16)).toString(16).padStart(6, '0');
			} else if (color.startsWith('rgb')) {
				const values = color.match(/\d+(\.\d+)?%?/g);
				const alpha = values.pop();
				const inverted = values.map((val) => 255 - parseFloat(val));
				return `rgb(${inverted.join(' ')} / ${alpha})`;
			}
		});

		let result = shadow;
		colors.forEach((color, index) => {
			result = result.replace(color, invertColors[index]);
		});

		return result;
	}

	function invertColor(hex) {
		if (hex.indexOf('#') === 0) {
			hex = hex.slice(1);
		}
		// convert 3-digit hex to 6-digits.
		if (hex.length === 3) {
			hex = hex
				.split('')
				.map(function (char) {
					return char + char;
				})
				.join('');
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
</script>

<div class="form">
	<div class="filter">
		<ColorPicker bind:color={mainTextColor} label={'Text color'} />
	</div>
	<div class="filter">
		<ColorPicker bind:color={mainShadowColor} label={'Shadow color'} on:input={updateShadowColor}/>
	</div>
	<div class="filter">
		<ColorPicker bind:color={leftGradColor} label={'Left gradient'} />
	</div>
	<div class="filter">
		<ColorPicker bind:color={rightGradColor} label={'Right gradient'} />
	</div>
	<label
		>Invert shadow<input type="checkbox" name="" on:click={(e) => updateTextAppearance(e)} /></label
	>
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
