import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let paintMapValue;
if (browser) {
	if (localStorage.getItem('paintMap') !== null) {
		paintMapValue = JSON.parse(localStorage.getItem('paintMap'));
	} else {
		paintMapValue = false;
	}
} else {
	paintMapValue = false;
}

export const paintMap = writable(paintMapValue);

paintMap.subscribe((val) => {
	if (browser) {
		localStorage.setItem('paintMap', JSON.stringify(val));
	}
});
