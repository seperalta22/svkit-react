<script lang="ts">
	import type { Post } from '@prisma/client';

	async function getPosts() {
		const res = await fetch('api/posts');
		const posts: Post[] = await res.json();
		return posts;
	}
</script>

<h1>Posts</h1>

{#await getPosts()}
	<p>loading...</p>
{:then posts}
	{#each posts as post}
		<div>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
		</div>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
</style>
