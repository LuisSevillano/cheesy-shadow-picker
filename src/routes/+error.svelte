<script>
	// your script goes here
</script>

<main>
	<p>Sorry about that</p>
	<div>
		<img class="rotate" src="/404.jpeg" alt="" />
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
