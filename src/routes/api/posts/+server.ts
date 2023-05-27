import db from '$lib/database';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const posts = await db.post.findMany({
		take: Math.round(Math.random() * 30) // 0-30 posts
	});

	event.setHeaders({
		'Cache-Control': 'max-age=60, public' // 1 minute
	});

	return json(posts);
};
