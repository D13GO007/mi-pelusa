import { c as createComponent } from './astro-component_9bvxi_rb.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Y5p3_hCK.mjs';
import { $ as $$Layout } from './Layout_CjeJmqZi.mjs';

const $$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Para Ti", "pageNumber": 2, "previousHref": "/page/1" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="lead">Esta segunda página quedó lista como continuación del libro.</p> <p>
Puedes reemplazar este texto por el siguiente mensaje cuando quieras ampliar la historia. La navegación
		ya está preparada para seguir agregando más páginas en la carpeta <strong>src/pages/page</strong>.
</p> <p>
Cuando añadas una nueva, solo ajusta el enlace <strong>Siguiente</strong> de la página anterior y el enlace
<strong>Anterior</strong> de la nueva página.
</p> ` })}`;
}, "D:/mi pelusa/src/pages/page/2.astro", void 0);

const $$file = "D:/mi pelusa/src/pages/page/2.astro";
const $$url = "/page/2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$2,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
