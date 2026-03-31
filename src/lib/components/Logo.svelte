<script>
	import { home } from '$lib/config';
</script>

<style>
	a {
		z-index: 2;
		position: absolute;
		left: 0;
		top: 0;
		width: 30px;
		height: 30px;
		border: 1px solid gray;
		margin: 0.25rem;
		border-bottom-right-radius: 2px;
		cursor: pointer;
		overflow: hidden;
	}

	img {
		width: 100%;
		transition: transform 1s;
	}
	a:hover {
		outline: 1px solid rgba(0, 0, 0, 0.25);
	}

	a:focus-visible {
		outline: 2px solid #2c60df;
		outline-offset: 1px;
	}

	@media (min-width: 830px) {
		a {
			width: 30px;
			height: 30px;
		}
	}
</style>
