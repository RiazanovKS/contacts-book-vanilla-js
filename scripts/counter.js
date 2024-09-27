import { createElementWithClassNames } from "./utils";

const setupCounter = () => {
  const element = createCounter();

  let count = 0;

  const increaseCount = () => {
    count = count + 1;
    element.textContent = count;
  };

  const decreaseCount = () => {
    count = count - 1;
    element.textContent = count;
  };

  const getCount = () => count;

  const destroy = () => {
    element.remove();
  };

  return {
    element,
    getCount,
    increaseCount,
    decreaseCount,
    destroy,
  };
};

const createCounter = () => {
  const counterElement = createElementWithClassNames("span", "letter__count");

  counterElement.textContent = 0;

  return counterElement;
};

export default setupCounter;
