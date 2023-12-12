<script>
	import ColorPicker from '$lib/ColorPicker.svelte';
	import shadows from '$lib/utils/stores';

	import {
		mainTextColorDef,
		leftGradColorDef,
		rightGradColorDef,
		mainShadowColorDef
	} from '$lib/config.js';

	export let mainTextColor;
	export let mainShadowColor;
	export let leftGradColor;
	export let rightGradColor;
	export let invert = false;
	$: invertShadow = invert;

	function reset() {
		mainTextColor = mainTextColorDef;
		leftGradColor = leftGradColorDef;
		rightGradColor = rightGradColorDef;
		mainShadowColor = mainShadowColorDef;
		invert = false;
		shadows.reset();
	}

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
	<div class="row">
		<div class="filter">
			<ColorPicker bind:color={mainTextColor} label={'Text color'} />
		</div>
		<div class="filter">
			<ColorPicker
				bind:color={mainShadowColor}
				label={'Shadow color'}
				on:input={updateShadowColor}
			/>
		</div>
		<div class="filter">
			<ColorPicker bind:color={leftGradColor} label={'Left gradient'} />
		</div>
		<div class="filter">
			<ColorPicker bind:color={rightGradColor} label={'Right gradient'} />
		</div>
		<div class="filter">
			<label
				>Invert shadow<input
					type="checkbox"
					name=""
					on:click={(e) => updateTextAppearance(e)}
					checked={invertShadow}
				/></label
			>
		</div>
	</div>
	<div class="row reset">
		<div class="filter button">
			<button on:click={() => reset()}>Reset</button>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	button {
		background-color: white;
		color: #f39008;
		border: 1px solid #f39008;
		border-radius: 2px;
		padding: 0.25rem 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		min-width: 60px;
		cursor: pointer;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		font-family: monospace;
		justify-content: normal;
	}
	.row.reset {
		margin-top: 0;
		justify-content: normal;
	}
	.form {
		margin: 0.5rem 0;
		padding: 0.5rem 0.5rem;
		position: sticky;
		top: 0px;
		background-color: #eee;
		outline: 1px solid black;
		border-radius: 0 0 2px 2px;
	}

	.filter {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		margin-right: 0.5rem;
		border: 1px solid black;
		padding: 0.15rem 0.25rem;
		border-radius: 2px;
		background: #f39008;
	}
	.filter.button {
		padding: 0;
		border: none;
		margin: 0;
	}
	input[type='checkbox'] {
		margin: 0;
		padding: 0;
		margin-left: 0.25rem;
	}
	button:hover {
		background-color: rgb(235, 235, 235);
		color: black;
	}
	@media (min-width: 830px) {
		.row {
			justify-content: space-between;
			flex-direction: row;
			align-items: normal;
		}
		.row.reset {
			justify-content: flex-end;
			margin-top: 0.5rem;
		}
		.filter {
			margin: 0;
			padding: 0;
			border: none;
			padding: 0.15rem 0.25rem;
		}
		.form {
			padding: 1rem 1rem;
		}
	}
	label {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
