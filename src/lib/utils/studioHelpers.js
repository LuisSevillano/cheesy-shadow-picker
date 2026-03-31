export const colorTokenRegex = /#[0-9a-fA-F]{3,8}|rgba?\([^\)]*\)/g;
export const cssClassNameRegex = /^[a-z][a-z0-9]*$/;

export function getNativeArtboardWidth(artboard, fallbackWidth = 1200) {
	if (!artboard) {
		return fallbackWidth;
	}

	if (Number.isFinite(artboard.maxWidth) && artboard.maxWidth > 0) {
		return artboard.maxWidth;
	}

	if (Number.isFinite(artboard.minWidth) && artboard.minWidth > 0) {
		return artboard.minWidth;
	}

	const styleWidth = Number.parseFloat(artboard.styleMap?.width || '');
	if (Number.isFinite(styleWidth) && styleWidth > 0) {
		return styleWidth;
	}

	return fallbackWidth;
}

export function hexToRgb(hex = '#000000') {
	let normalized = hex.replace('#', '');
	if (normalized.length === 3) {
		normalized = normalized
			.split('')
			.map((char) => `${char}${char}`)
			.join('');
	}

	const bigint = Number.parseInt(normalized, 16);
	if (!Number.isFinite(bigint)) {
		return [0, 0, 0];
	}

	return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

export function recolorShadow(shadow, nextColor) {
	if (!shadow) {
		return '';
	}

	const colors = shadow.match(colorTokenRegex);
	if (!colors?.length) {
		return shadow;
	}

	const [r, g, b] = hexToRgb(nextColor);
	const replacements = colors.map((token) => {
		if (token.startsWith('#')) {
			return nextColor;
		}

		const values = token.match(/\d+(?:\.\d+)?%?/g) || [];
		if (!values.length) {
			return `rgb(${r} ${g} ${b})`;
		}

		const alpha = values[3];
		return alpha ? `rgb(${r} ${g} ${b} / ${alpha})` : `rgb(${r} ${g} ${b})`;
	});

	let nextShadow = shadow;
	colors.forEach((token, index) => {
		nextShadow = nextShadow.replace(token, replacements[index]);
	});

	return nextShadow;
}

export function normalizeHex(hex = '') {
	if (!hex) {
		return '';
	}

	let normalized = hex.trim().replace('#', '');
	if (normalized.length === 3 || normalized.length === 4) {
		normalized = normalized
			.slice(0, 3)
			.split('')
			.map((char) => `${char}${char}`)
			.join('');
	}

	return `#${normalized.slice(0, 6).toLowerCase()}`;
}

export function cssColorToHex(value = '') {
	if (!value) {
		return '';
	}

	if (value.startsWith('#')) {
		return normalizeHex(value);
	}

	const parts = value.match(/[\d.]+%?/g);
	if (!parts || parts.length < 3) {
		return '';
	}

	const [rRaw, gRaw, bRaw] = parts;
	const toChannel = (chunk) => {
		if (chunk.endsWith('%')) {
			return Math.round((Number.parseFloat(chunk) / 100) * 255);
		}

		return Math.round(Number.parseFloat(chunk));
	};

	const toHex = (number) => Math.max(0, Math.min(255, number)).toString(16).padStart(2, '0');
	return `#${toHex(toChannel(rRaw))}${toHex(toChannel(gRaw))}${toHex(toChannel(bRaw))}`;
}

export function extractShadowColor(shadow = '') {
	const token = shadow.match(colorTokenRegex)?.[0];
	return token ? cssColorToHex(token) : '';
}

export function normalizeShadowSignature(shadow = '') {
	return shadow
		.toLowerCase()
		.replace(colorTokenRegex, '__c__')
		.replace(/0px/g, '0')
		.replace(/\s*,\s*/g, ',')
		.replace(/\s+/g, ' ')
		.trim();
}

export function sanitizeCssClassName(value = '') {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '')
		.replace(/^[^a-z]+/, '');
}

export function buildCssShadowRule(className = '', shadow = '') {
	if (!className || !shadow) {
		return '';
	}

	return `.${className} { text-shadow: ${shadow}; }`;
}
