import { writable } from 'svelte/store';
import defaultData from '$lib/utils/data';

export default writable(defaultData);
