export const createElementWithClassNames = (tagName, ...classNames) => {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  return element;
};
