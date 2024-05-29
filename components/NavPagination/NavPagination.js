export function NavPagination({ Page, maxPage }) {
  const span = document.createElement("span");
  span.className = "navigation__pagination";
  span.textContent = `${Page} / ${maxPage}`;
  return span;
}
