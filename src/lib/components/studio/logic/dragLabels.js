export function createDragHandlers({ getStageRef, selectLabel, updateLabel, clearActiveLabel }) {
	let dragState = null;

	function startDrag(event, label) {
		const stageRef = getStageRef();
		if (!stageRef) {
			return;
		}

		event.stopPropagation();
		selectLabel(label.id);

		const stageRect = stageRef.getBoundingClientRect();
		const labelRect = event.currentTarget.getBoundingClientRect();
		const startTopFromLayout = stageRect.height
			? ((labelRect.top - stageRect.top) / stageRect.height) * 100
			: 0;
		const startLeftFromLayout = stageRect.width
			? ((labelRect.left - stageRect.left) / stageRect.width) * 100
			: 0;
		const styleMap = label.styleMap || {};
		const parsedTop = parseFloat(styleMap.top);
		const parsedLeft = parseFloat(styleMap.left);

		dragState = {
			id: label.id,
			startX: event.clientX,
			startY: event.clientY,
			startTop: Number.isFinite(parsedTop) ? parsedTop : startTopFromLayout,
			startLeft: Number.isFinite(parsedLeft) ? parsedLeft : startLeftFromLayout,
			width: stageRect.width,
			height: stageRect.height
		};

		document.body.classList.add('dragging-labels');
		event.currentTarget.setPointerCapture?.(event.pointerId);
	}

	function handlePointerMove(event) {
		if (!dragState) {
			return;
		}

		const deltaX = ((event.clientX - dragState.startX) / dragState.width) * 100;
		const deltaY = ((event.clientY - dragState.startY) / dragState.height) * 100;

		const nextTop = Math.min(100, Math.max(0, dragState.startTop + deltaY));
		const nextLeft = Math.min(100, Math.max(0, dragState.startLeft + deltaX));

		updateLabel(dragState.id, (label) => {
			const styleMap = { ...(label.styleMap || {}) };
			styleMap.top = `${nextTop}%`;
			styleMap.left = `${nextLeft}%`;
			return { ...label, styleMap };
		});
	}

	function handlePointerUp() {
		dragState = null;
		document.body.classList.remove('dragging-labels');
	}

	function handleStagePointerDown(event) {
		if (!event.target.closest('.draggable-label')) {
			clearActiveLabel();
		}
	}

	function cleanupDragState() {
		dragState = null;
		if (typeof document !== 'undefined') {
			document.body.classList.remove('dragging-labels');
		}
	}

	return {
		startDrag,
		handlePointerMove,
		handlePointerUp,
		handleStagePointerDown,
		cleanupDragState
	};
}
