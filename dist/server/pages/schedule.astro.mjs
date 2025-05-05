/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as createAstro, j as Fragment, g as addAttribute } from '../chunks/astro/server_DM1M5Oof.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Pka9OEEN.mjs';
import { c as $$WidgetTitle, $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, d as $$Sidebar } from '../chunks/Sidebar_CDOUXjfv.mjs';
import { a as animeConfig } from '../chunks/animeConfig_CqZ-hfDk.mjs';
import { s as skuy } from '../chunks/skuy_DWT8A4dG.mjs';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$StarIcon } from '../chunks/StarIcon_BCGfXpC4.mjs';
import { $ as $$Error } from '../chunks/Error_BAg-tp9w.mjs';
export { renderers } from '../renderers.mjs';

async function scheduleService() {
  const result = await skuy("/schedule");
  return result;
}

const $$Astro = createAstro();
const $$AnimeList4 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeList4;
  const {
    anime: { days, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4"> ${days.map((day) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WidgetTitle", $$WidgetTitle, { "title": day.day })} <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> ${day.animeList.map((anime) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")} class="group rounded-lg relative"> <div class="relative"> <img loading="lazy" class="anime2-item-img"${addAttribute(anime.poster, "src")}${addAttribute(anime.title, "alt")}> <span class="anime2-item-type">${anime.type}</span> <span class="anime2-item-score"> ${renderComponent($$result3, "StarIcon", $$StarIcon, { "class": "w-[12px] h-[12px]" })} <span>${anime.score}</span> </span> <span class="anime2-item-status">${anime.estimation}</span> </div> <div class="p-2"> <h3 class="anime2-item-title">${anime.title}</h3> </div> </a> <div class="hidden">${anime.genres}</div> ` })}`)} </div> ` })}`)} </div>`;
}, "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/components/AnimeList4.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const schedule = await scheduleService();
  return renderTemplate`${() => {
    if (schedule.ok) {
      const title = `Schedule | Jadwal Rilis - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Jadwal Rilis" })}${renderComponent($$result4, "AnimeList4", $$AnimeList4, { "anime": {
        days: schedule.data.days,
        baseUrlPath: "/anime"
      } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": schedule.statusCode, "message": schedule.message || schedule.statusMessage })}`;
  }}`;
}, "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/pages/schedule/index.astro", void 0);

const $$file = "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/pages/schedule/index.astro";
const $$url = "/schedule";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
