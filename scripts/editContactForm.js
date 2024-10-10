import { createElementWithClassNames } from "./utils";

const setupEditContactForm = () => {
  const element = create();

  const destroy = () => {
    element.remove();
  };

  const setSubmitHandler = (handler) => {
    element.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      handler(formData);
    });
  };

  return {
    element,
    setSubmitHandler,
    destroy,
  };
};

const create = () => {
  const formElement = createElementWithClassNames("form", "edit-contact-form");

  const nameInputElement = createElementWithClassNames();
  nameInputElement.type = "text";
  nameInputElement.placeholder = "name";

  const vacancyInputElement = createElementWithClassNames("input");
  vacancyInputElement.type = "text";
  vacancyInputElement.placeholder = "vacancy";

  const phoneInputElement = createElementWithClassNames("input");
  phoneInputElement.type = "tel";
  phoneInputElement.placeholder = "phone";

  const submitButton = createElementWithClassNames("button", "button--success");
  submitButton.type = "submit";
  submitButton.textContent = "Save";

  formElement.append(
    nameInputElement,
    vacancyInputElement,
    phoneInputElement,
    submitButton,
  );

  return formElement;
};

export default setupEditContactForm;
