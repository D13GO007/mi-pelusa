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
		return res.status(405).json({ error: 'Metodo no permitido' });
	}

	const { quien } = req.query;
	const cleanName = typeof quien === 'string' ? quien.trim().slice(0, 120) : '';

	if (!cleanName) {
		return res.redirect(307, '/page/1');
	}

	const supabase = getSupabaseClient();

	if (!supabase) {
		console.error('Faltan variables de Supabase en entorno.');
		return res.redirect(307, '/page/1');
	}

	try {
		const { error } = await supabase.from('clics').insert([{ quien: cleanName }]);

		if (error) {
			throw error;
		}
	} catch (error) {
		console.error('Error al registrar:', error);
	}

	return res.redirect(307, '/page/1');
}