import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const redirectPath = '/page/1';
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

const supabase =
	supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export const GET: APIRoute = async ({ url }) => {
	const quien = url.searchParams.get('quien')?.trim();
	const redirectUrl = new URL(redirectPath, url);

	if (!quien) {
		return Response.redirect(redirectUrl, 307);
	}

	if (!supabase) {
		console.error('Faltan SUPABASE_URL o SUPABASE_KEY.');
		return Response.redirect(redirectUrl, 307);
	}

	try {
		const { error } = await supabase.from('clics').insert([{ quien }]);

		if (error) {
			throw error;
		}
	} catch (error) {
		console.error('Error al registrar clic:', error);
	}

	return Response.redirect(redirectUrl, 307);
};