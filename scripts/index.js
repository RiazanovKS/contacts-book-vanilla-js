import { setupForm } from "./contactForm";
import setupAlphabet from "./alphabet";

import "../styles/styles.scss";
import setupModal from "./modal";

const contactForm = setupForm(document.querySelector(".contact-form"));
const alphabet = setupAlphabet(document.querySelector(".alphabet-list"));
const searchButton = document.querySelector(".contact-form__search");

const modal = setupModal();

contactForm.setSubmitHandler((formData) => {
  const name = formData.get("name");
  const vacancy = formData.get("vacancy");
  const phone = formData.get("phone");

  alphabet.addContact({ name, vacancy, phone });
});

searchButton.addEventListener("click", () => {
  modal.toggleHidden();
});
