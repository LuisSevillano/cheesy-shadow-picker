export function createDragHandlers({ getStageRef, selectLabel, updateLabel, clearActiveLabel }) {
	let dragState = null;

	function startDrag(event, label) {
		const stageRef = getStageRef();
		if (!stageRef) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();
		selectLabel(label.id);

		const stageRect = stageRef.getBoundingClientRect();

		// Use the first child's dimensions if stage itself has no height (padding-bottom trick)
		let stageWidth = stageRect.width;
		let stageHeight = stageRect.height;

		if (!stageHeight && stageRef.firstElementChild) {
			const childRect = stageRef.firstElementChild.getBoundingClientRect();
			stageHeight = childRect.height;
			stageWidth = childRect.width || stageWidth;
		}

		// If stage has no dimensions yet, don't start drag
		if (!stageWidth || !stageHeight) {
			return;
		}

		const labelRect = event.currentTarget.getBoundingClientRect();
		const startTopFromLayout = ((labelRect.top - stageRect.top) / stageHeight) * 100;
		const startLeftFromLayout = ((labelRect.left - stageRect.left) / stageWidth) * 100;
		const styleMap = label.styleMap || {};

		// Parse percentage values correctly (e.g., "15%" -> 15)
		const parsedTop = parseFloat(styleMap.top);
		const parsedLeft = parseFloat(styleMap.left);

		dragState = {
			id: label.id,
			startX: event.clientX,
			startY: event.clientY,
			startTop: Number.isFinite(parsedTop) ? parsedTop : startTopFromLayout,
			startLeft: Number.isFinite(parsedLeft) ? parsedLeft : startLeftFromLayout,
			width: stageWidth,
			height: stageHeight
		};

		document.body.classList.add('dragging-labels');
		event.currentTarget.setPointerCapture?.(event.pointerId);
	}

	function handlePointerMove(event) {
		if (!dragState || typeof dragState === 'string') {
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
		const currentDragState = dragState;
		dragState = 'dropping';
		document.body.classList.remove('dragging-labels');
		setTimeout(() => {
			if (dragState === 'dropping') {
				dragState = null;
			}
		}, 150);
	}

	function handleStagePointerDown(event) {
		if (!event.target.closest('.draggable-label')) {
			clearActiveLabel();
		}
	}

	function isDraggingLabel() {
		return !!dragState;
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
		cleanupDragState,
		isDraggingLabel
	};
}
