export function cloneLabels(list = []) {
	return list.map((label) => ({
		...label,
		styleMap: { ...(label.styleMap || {}) }
	}));
}

export function getAvailableArtboardWidth(workspaceColumnRef) {
	if (workspaceColumnRef?.clientWidth) {
		return workspaceColumnRef.clientWidth;
	}

	if (typeof window !== 'undefined') {
		return Math.max(300, window.innerWidth - 24);
	}

	return 1200;
}

export function isHtmlFile(file) {
	if (!file) {
		return false;
	}

	return file.name.endsWith('.html') || file.type.includes('html') || file.type.includes('text');
}

export function readImageFileAsDataUrl(file) {
	return new Promise((resolve, reject) => {
		if (!file || !file.type.startsWith('image/')) {
			reject(new Error('Invalid image file.'));
			return;
		}

		const reader = new FileReader();
		reader.onload = () => resolve(reader.result || '');
		reader.onerror = () => reject(new Error('Could not read image file.'));
		reader.readAsDataURL(file);
	});
}

export function readImageNaturalWidth(src) {
	return new Promise((resolve) => {
		const imageElement = new Image();
		imageElement.onload = () => {
			if (imageElement.naturalWidth && imageElement.naturalHeight) {
				resolve(imageElement.naturalWidth);
				return;
			}

			resolve(null);
		};
		imageElement.onerror = () => resolve(null);
		imageElement.src = src;
	});
}
