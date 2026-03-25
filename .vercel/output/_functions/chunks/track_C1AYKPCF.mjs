import { createClient } from '@supabase/supabase-js';

const redirectPath = "/page/1";
const supabaseUrl = "tu_url_de_supabase";
const supabaseKey = "tu_api_key_de_supabase";
const supabase = createClient(supabaseUrl, supabaseKey) ;
const GET = async ({ url }) => {
  const quien = url.searchParams.get("quien")?.trim();
  const redirectUrl = new URL(redirectPath, url);
  if (!quien) {
    return Response.redirect(redirectUrl, 307);
  }
  if (!supabase) {
    console.error("Faltan SUPABASE_URL o SUPABASE_KEY.");
    return Response.redirect(redirectUrl, 307);
  }
  try {
    const { error } = await supabase.from("clics").insert([{ quien }]);
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error al registrar clic:", error);
  }
  return Response.redirect(redirectUrl, 307);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
