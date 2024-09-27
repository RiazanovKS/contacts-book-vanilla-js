export const setupCounter = (element) => {
  if (!element) {
    element = createCounter();
  }

  const increaseCount = () => {
    const currentCount = Number(element.textContent);
    element.textContent = currentCount + 1;
  };

  const decreaseCount = () => {
    const currentCount = Number(element.textContent);
    element.textContent = currentCount - 1;
  };

  const destroy = () => {
    element.remove();
  };

  return {
    element,
    increaseCount,
    decreaseCount,
    destroy,
  };
};

const createCounter = (count) => {
  const counterElement = document.createElement("span");

  counterElement.classList.add("letter-contacts-count");
  counterElement.textContent = count;

  return counterElement;
};
