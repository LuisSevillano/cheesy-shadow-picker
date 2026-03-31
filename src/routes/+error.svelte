<script>
	// your script goes here
</script>

<main>
	<h1>Página no encontrada</h1>
	<p>Sorry about that</p>
	<div>
		<img class="rotate" src="/404.jpeg" alt="" width="300" height="300" loading="eager" />
	</div>
	<a class="back" href="../">Volver</a>
</main>

<style>
	main {
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	h1 {
		margin-bottom: 0.5rem;
	}
	div {
		border-radius: 50%;
		overflow: hidden;
		max-width: 300px;
		border: 1px solid #333;
	}
	img {
		width: 100%;
	}
	.rotate {
		animation: rotation 80s infinite linear;
	}
	@media (prefers-reduced-motion: reduce) {
		.rotate {
			animation: none;
		}
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
	.back {
		margin-top: 2rem;
	}
</style>
