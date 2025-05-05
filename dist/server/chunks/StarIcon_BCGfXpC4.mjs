import { e as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as createAstro } from './astro/server_DM1M5Oof.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$StarIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StarIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path> </svg>`;
}, "C:/Users/ASUS/Downloads/fixanime-main/fixanime-main/src/components/icons/StarIcon.astro", void 0);

export { $$StarIcon as $ };
