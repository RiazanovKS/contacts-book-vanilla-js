import setupLetter from "./letter";
import { createElementWithClassNames } from "./utils";

const setupAlphabet = (element) => {
  if (!element) {
    element = createElementWithClassNames("ul", "letter__contacts-list");
  }
  const letters = {};

  const clear = () => {
    element.innerHTML = "";
  };

  const addContact = (contact) => {
    const nameFirstLetterCapitalized = contact.name.slice(0, 1).toUpperCase();

    let targetLetter = letters[nameFirstLetterCapitalized];

    if (!targetLetter) {
      targetLetter = setupLetter(nameFirstLetterCapitalized);

      letters[nameFirstLetterCapitalized] = targetLetter;
    }

    targetLetter.addContact(contact, () => {
      deleteContact(targetLetter);
    });

    element.append(targetLetter.element);
  };

  const deleteContact = (letter) => {
    if (letter.getCount() - 1 === 0) {
      letter.destroy();
    }
  };

  const searchContacts = (query) => {};

  const destroy = () => {
    element.remove();
  };

  return {
    addContact,
    clear,
    destroy,
  };
};

export default setupAlphabet;
