import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY,
);

export default async function handler(req, res) {
	const { quien } = req.query;

	if (!quien) {
		return res.redirect(307, '/page/1');
	}

	try {
		const { error } = await supabase.from('clics').insert([{ quien }]);

		if (error) {
			throw error;
		}
	} catch (error) {
		console.error('Error al registrar:', error);
	}

	return res.redirect(307, '/page/1');
}