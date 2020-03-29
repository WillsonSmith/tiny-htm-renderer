export function h(el, props, ...children) {
  el = document.createElement(el);
  for (let i in props) {
    i in el ? (el[i] = props[i]) : el.setAttribute(i, props[i]);
  }
  el.append(...children.flat(Infinity));
  return el;
}

export const renderer = () => {
  let oldChild = new Map();
  return (what, where) => {
    oldChild.has(where)
      ? where.replaceChild(what, oldChild.get(where))
      : where.appendChild(what);
    oldChild.set(where, what);
  };
};
