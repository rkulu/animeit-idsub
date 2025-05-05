/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../chunks/astro/server_DM1M5Oof.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Pka9OEEN.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_CDOUXjfv.mjs';
import { a as animeConfig } from '../chunks/animeConfig_CqZ-hfDk.mjs';
import { s as skuy } from '../chunks/skuy_DWT8A4dG.mjs';
import { $ as $$AnimeList2 } from '../chunks/AnimeList2_BRm3tTjG.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_BozPnSe5.mjs';
import { $ as $$Error } from '../chunks/Error_BAg-tp9w.mjs';
export { renderers } from '../renderers.mjs';

async function ongoingService(queryParam) {
  const { page } = queryParam;
  const result = await skuy(`/ongoing?order=update&page=${page || 1}`);
  return result;
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const page = Astro2.url.searchParams.get("page");
  const ongoing = await ongoingService({ page });
  return renderTemplate`${() => {
    if (ongoing.ok) {
      const title = `Ongoing | Anime Sedang Tayang - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Anime Sedang Tayang" })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: ongoing.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": ongoing.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": ongoing.statusCode, "message": ongoing.message || ongoing.statusMessage })}`;
  }}`;
}, "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/pages/ongoing/index.astro", void 0);

const $$file = "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/pages/ongoing/index.astro";
const $$url = "/ongoing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
