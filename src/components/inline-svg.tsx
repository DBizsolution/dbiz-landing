/* Injects a raw SVG string (imported from public/assets/svg/) inline so
   page CSS — theme variables, animations, state-driven recolors — applies
   to its internals, which an <img> reference would not allow.
   display:contents keeps the wrapper out of layout and CSS selectors. */
export function InlineSvg({ markup }: { markup: string }) {
  return <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: markup }} />
}
