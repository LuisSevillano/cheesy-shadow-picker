import { writable } from 'svelte/store';
import defaultData from '$lib/utils/data';

const clone = (obj) => JSON.parse(JSON.stringify(obj));

export function createDefaultStore() {
	const { subscribe, set, update } = writable(clone(defaultData));

	return {
		subscribe,
		set,
		update,
		reset: () => set(clone(defaultData))
	};
}

const data = createDefaultStore();

export default data;
