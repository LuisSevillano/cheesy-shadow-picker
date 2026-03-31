const toNumber = (value, fallback = 0) => {
	const parsed = Number.parseFloat(value);
	return Number.isFinite(parsed) ? parsed : fallback;
};

const parseInlineStyle = (styleString = '') => {
	return styleString
		.split(';')
		.map((chunk) => chunk.trim())
		.filter(Boolean)
		.reduce((acc, chunk) => {
			const [property, ...valueParts] = chunk.split(':');
			if (!property || valueParts.length === 0) {
				return acc;
			}

			acc[property.trim().toLowerCase()] = valueParts.join(':').trim();
			return acc;
		}, {});
};

const normalizeName = (id = '', fallback = 'Artboard') => {
	if (!id) {
		return fallback;
	}

	return id.replace(/^g-/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
};

const parseAspectRatioFromPadding = (styleMap = {}) => {
	const paddingRaw = styleMap.padding || '';
	const parts = paddingRaw.split(/\s+/).filter(Boolean);
	const verticalPadding = parts[2] || parts[0] || '';
	const percentage = toNumber(verticalPadding, 0);

	if (!percentage) {
		return null;
	}

	return 100 / percentage;
};

const mapToStyleString = (styleMap = {}) => {
	return Object.entries(styleMap)
		.map(([key, value]) => `${key}: ${value}`)
		.join(';');
};

export function pickBestArtboard(artboards, viewportWidth) {
	if (!Array.isArray(artboards) || artboards.length === 0) {
		return null;
	}

	return (
		artboards.find(
			(artboard) => viewportWidth >= artboard.minWidth && viewportWidth <= artboard.maxWidth
		) || artboards[0]
	);
}

export const sampleAi2html = ``;

export function parseAi2htmlDocument(rawHtml = '') {
	if (!rawHtml.trim()) {
		throw new Error('The file is empty.');
	}

	let htmlContent = rawHtml.trim();
	if (!htmlContent.includes('<html') && !htmlContent.includes('<!DOCTYPE')) {
		htmlContent = `<!DOCTYPE html><html><head></head><body>${htmlContent}</body></html>`;
	}

	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlContent, 'text/html');
	const artboardNodes = [...doc.querySelectorAll('.g-artboard')];
	const rootNode = doc.querySelector('.ai2html');

	if (!artboardNodes.length) {
		throw new Error('No ai2html artboards found.');
	}

	const cssText = [...doc.querySelectorAll('style')]
		.map((styleNode) => styleNode.textContent || '')
		.join('\n')
		.trim();

	const artboards = artboardNodes.map((artboardNode, artboardIndex) => {
		const styleMap = parseInlineStyle(artboardNode.getAttribute('style') || '');
		const spacerNode = artboardNode.querySelector(':scope > div:not([id])');
		const spacerStyle = parseInlineStyle(spacerNode?.getAttribute('style') || '');

		const graphicNode = artboardNode.querySelector('[id$="-graphic"]');
		const labelNodes = graphicNode
			? [...graphicNode.querySelectorAll('.g-aiAbs')]
			: [...artboardNode.querySelectorAll(':scope > div.g-aiAbs')];

		const imageNode = graphicNode
			? graphicNode.querySelector('img.g-aiImg, img')
			: artboardNode.querySelector('img.g-aiImg, img');

		const hasSpacer = spacerNode && Object.keys(spacerStyle).length > 0;

		const labels = labelNodes.map((labelNode, labelIndex) => {
			const labelStyleMap = parseInlineStyle(labelNode.getAttribute('style') || '');
			const previewText = labelNode.textContent
				.split('\n')
				.map((chunk) => chunk.trim())
				.filter(Boolean)
				.join(' ')
				.trim();

			return {
				id: labelNode.id || `label-${artboardIndex + 1}-${labelIndex + 1}`,
				className: labelNode.className || '',
				html: labelNode.innerHTML,
				previewText: previewText || `Label ${labelIndex + 1}`,
				styleMap: labelStyleMap,
				shadow: '',
				textColor: ''
			};
		});

		const aspectRatioFromSpacer = parseAspectRatioFromPadding(spacerStyle);
		const aspectRatio =
			toNumber(artboardNode.dataset.aspectRatio, 0) || aspectRatioFromSpacer || 16 / 9;

		return {
			id: artboardNode.id || `artboard-${artboardIndex + 1}`,
			name: normalizeName(artboardNode.id, `Artboard ${artboardIndex + 1}`),
			className: artboardNode.className || 'g-artboard',
			style: artboardNode.getAttribute('style') || '',
			styleMap,
			aspectRatio,
			minWidth: toNumber(artboardNode.dataset.minWidth, toNumber(styleMap['min-width'], 0)),
			maxWidth: toNumber(
				artboardNode.dataset.maxWidth,
				toNumber(styleMap['max-width'], Number.POSITIVE_INFINITY)
			),
			paddingStyle: hasSpacer ? mapToStyleString(spacerStyle) : '',
			imageSrc: imageNode?.getAttribute('src') || '',
			imageAlt: imageNode?.getAttribute('alt') || '',
			imageClassName: imageNode?.className || 'g-aiImg',
			imageId: imageNode?.id || '',
			labels
		};
	});

	return {
		cssText,
		rootId: rootNode?.id || '',
		rootClassName: rootNode?.className || 'ai2html',
		artboards
	};
}
