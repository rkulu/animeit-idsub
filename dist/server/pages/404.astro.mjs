/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DM1M5Oof.mjs';
import 'kleur/colors';
import { $ as $$Error } from '../chunks/Error_BAg-tp9w.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": 404, "message": "Halaman Tidak Ditemukan" })}`;
}, "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/pages/404.astro", void 0);

const $$file = "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
