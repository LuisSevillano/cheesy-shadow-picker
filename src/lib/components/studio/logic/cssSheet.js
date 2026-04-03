export function getCurrentLabelShadow(activeLabelId) {
	if (!activeLabelId || typeof document === 'undefined') {
		return '';
	}

	const hostNode = document.getElementById(activeLabelId);
	if (!hostNode) {
		return '';
	}

	const textNode = hostNode.querySelector('p, span, div') || hostNode;
	const computedShadow = getComputedStyle(textNode).textShadow;
	return computedShadow && computedShadow !== 'none' ? computedShadow : '';
}

export function getShadowForCssRule({ selectedLabel, activeLabelId, activeShadow }) {
	if (selectedLabel?.shadow) {
		return selectedLabel.shadow;
	}

	const labelShadow = getCurrentLabelShadow(activeLabelId);
	if (labelShadow) {
		return labelShadow;
	}

	return activeShadow;
}

export function upsertCssShadowRule(cssRules, className, shadow) {
	const nextRule = {
		className,
		shadow
	};

	const index = cssRules.findIndex((rule) => rule.className === className);
	if (index === -1) {
		return [...cssRules, nextRule];
	}

	return cssRules.map((rule, ruleIndex) => (ruleIndex === index ? nextRule : rule));
}
