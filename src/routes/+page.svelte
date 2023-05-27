<script lang="ts">
	async function suscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form); // a FormData object

		await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		});
	}
</script>

<h1>Newsletter</h1>

<form on:submit|preventDefault={suscribe}>
	<input type="email" name="email" placeholder="Email" />
	<button>Subscribe</button>
</form>
