import { createElementWithClassNames } from "./utils";

const setupSearchForm = () => {
  const { formElement, inputElement } = create();

  const setChangeHandler = (onChange) => {
    inputElement.addEventListener("change", (event) => {
      const value = event.target.value;
      onChange(value);
    });
  };

  const destroy = () => {
    formElement.remove();
  };

  return {
    element: formElement,
    setChangeHandler,
    destroy,
  };
};

const create = () => {
  const formElement = createElementWithClassNames("form", "search-form");

  const inputElement = createElementWithClassNames(
    "input",
    "search-form__input",
  );
  inputElement.type = "search";
  inputElement.placeholder = "Search...";

  formElement.append(inputElement);

  return { formElement, inputElement };
};

export default setupSearchForm;
