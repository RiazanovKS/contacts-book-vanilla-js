import { setupForm } from "./contactForm";
import setupModal from "./modal";
import setupAlphabet from "./alphabet";
import setupSearchForm from "./searchForm";
import setupEditContactForm from "./editContactForm";

import "../styles/styles.scss";
// import setupModal from "./modal";

const contactForm = setupForm(document.querySelector(".contact-form"));
const alphabet = setupAlphabet(document.querySelector(".alphabet-list"));
const searchButton = document.querySelector(".contact-form__search");
const clearButton = document.querySelector(".js-clear-contacts-button");

console.log(contactForm);

const searchForm = setupSearchForm();
const editForm = setupEditContactForm();
searchForm.setChangeHandler((event) => {
  console.log(event.target.value);
});

const modalSearchForm = setupModal(searchForm.element);
const modalEditForm = setupModal(editForm.element);

document.body.append(modalSearchForm.element);

contactForm.setSubmitHandler((formData) => {
  const name = formData.get("name");
  const vacancy = formData.get("vacancy");
  const phone = formData.get("phone");

  alphabet.addContact({ name, vacancy, phone });
});

searchButton.addEventListener("click", () => {
  console.log("click");
  modalSearchForm.show();
});

clearButton.addEventListener("click", () => {
  alphabet.clear();
});
