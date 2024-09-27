export const setupForm = (element, onSubmit) => {
  if (!element) {
    element = createForm(onSubmit);
  }

  const setSubmitHandler = (handler) => {
    element.removeEventListener("submit", onSubmit);

    element.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

      handler(formData);
    });
  };

  return {
    setSubmitHandler,
  };
};

const createForm = (submitHandler) => {
  const element = document.createElement("form");

  element.classList.add("contact-form");

  if (submitHandler) {
    element.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

      handler(formData);
    });
  }

  return element;
};
