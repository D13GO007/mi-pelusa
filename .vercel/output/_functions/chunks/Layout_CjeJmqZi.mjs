import { c as createComponent } from './astro-component_9bvxi_rb.mjs';
import 'piccolore';
import { h as addAttribute, n as renderHead, r as renderTemplate, o as renderSlot } from './entrypoint_Y5p3_hCK.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Para Ti",
    pageNumber,
    previousHref = null,
    nextHref = null
  } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}${pageNumber ? ` - Página ${pageNumber}` : ""}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <main class="page-shell" data-astro-cid-sckkx6r4> <div class="book-container" data-astro-cid-sckkx6r4> <header data-astro-cid-sckkx6r4> <h1 data-astro-cid-sckkx6r4>${title}</h1> ${pageNumber && renderTemplate`<div class="page-number" data-astro-cid-sckkx6r4>Página ${pageNumber}</div>`} </header> <div class="page-content" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> <footer data-astro-cid-sckkx6r4> ${previousHref ? renderTemplate`<a${addAttribute(previousHref, "href")} class="nav-link" data-astro-cid-sckkx6r4>« Anterior</a>` : renderTemplate`<span class="nav-link disabled" data-astro-cid-sckkx6r4>« Anterior</span>`} ${nextHref ? renderTemplate`<a${addAttribute(nextHref, "href")} class="nav-link" data-astro-cid-sckkx6r4>Siguiente »</a>` : renderTemplate`<span class="nav-link disabled" data-astro-cid-sckkx6r4>Siguiente »</span>`} </footer> </div> </main></body></html>`;
}, "D:/mi pelusa/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
