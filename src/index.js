import htm from "htm";

function h(el, props, ...children) {
  el = document.createElement(el);
  for (let i in props) {
    i in el ? (el[i] = props[i]) : el.setAttribute(i, props[i]);
  }
  el.append(...children.flat());
  return el;
}
export const html = htm.bind(h);

export const renderer = () => {
  let oldChild = null;

  return (what, where) => {
    oldChild ? where.replaceChild(what, oldChild) : where.appendChild(what);
    oldChild = what;
  };
};
