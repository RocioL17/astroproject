export const getLi = (child: HTMLElement) => {
  while (child.tagName !== "LI") {
    child = child.parentElement!;
  }
  return child;
};

export const countTasks = () => {
  const allCheckboxEls = document.querySelectorAll("input[type=checkbox]");
  const counter = document.querySelector('[data-selector="item-counter"]')!
  counter.innerHTML = (allCheckboxEls.length - 1).toString()
}