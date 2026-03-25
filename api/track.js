import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
	const url = process.env.SUPABASE_URL;
	const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_KEY;

	if (!url || !key) {
		return null;
	}

	return createClient(url, key);
}

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).send('Metodo no permitido');
	}

	const { quien } = req.query;
	const cleanName = typeof quien === 'string' ? quien.trim().slice(0, 120) : '';

	if (!cleanName) {
		return res.redirect(307, '/page/1');
	}

	const supabase = getSupabaseClient();

	if (!supabase) {
		return res
			.status(500)
			.send('Error del servidor: Faltan SUPABASE_URL o SUPABASE_KEY en entorno.');
	}

	try {
		const { error } = await supabase.from('clics').insert([{ quien: cleanName }]);

		if (error) {
			return res.status(500).send(`Error de Supabase: ${error.message}`);
		}
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		return res.status(500).send(`Error del servidor: ${message}`);
	}

	return res.redirect(307, '/page/1');
}