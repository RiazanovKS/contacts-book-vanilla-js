import { setupCounter } from "./counter";
import { setupContactsList } from "./contactsList";
import { setupForm } from "./contactForm";

import "../styles/styles.scss";

const contactForm = setupForm(document.querySelector(".contact-form"));

contactForm.setSubmitHandler((formData) => {
  const name = formData.get("name");
  const vacancy = formData.get("vacancy");
  const phone = formData.get("phone");

  insertContact(name, vacancy, phone);
});

function insertContact(name, vacancy, phone) {
  const nameFirstLetterCapitalized = name.slice(0, 1).toUpperCase();

  const targetAlphabetElement = document.querySelector(
    `[data-letter=${nameFirstLetterCapitalized}]`,
  );

  let contatsList = setupContactsList(
    targetAlphabetElement.querySelector(".contacts-list"),
  );

  let counter = setupCounter(
    targetAlphabetElement.querySelector(".letter-contacts-count"),
  );

  const letterElement = targetAlphabetElement.querySelector(
    ".contacts-alphabet-letter",
  );

  const handleDelete = (event) => {
    if (contatsList.element.childElementCount - 1 === 0) {
      contatsList.destroy();
      counter.destroy();
      return;
    }

    contatsList.deleteContact(event);
    counter.decreaseCount();
  };

  contatsList.addContact(name, vacancy, phone, handleDelete);
  counter.increaseCount();

  letterElement.append(counter.element);
  targetAlphabetElement.append(contatsList.element);
}
