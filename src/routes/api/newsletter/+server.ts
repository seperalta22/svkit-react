// api/newsletter GET

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	return new Response('Hello world!');
};

// api/newsletter POST

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const email = data.get('email');

	//suscribe al usuario a la newsletter
	console.log(email);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'content-type': 'application/json'
		}
	});
};
