import { createElementWithClassNames } from "./utils";
import { setupContactsList } from "./contactsList";
import setupCounter from "./counter";

const setupLetter = (character) => {
  const counter = setupCounter();
  const contactsList = setupContactsList();

  const element = create(character, counter, contactsList);

  const addContact = (contact, onDelete) => {
    contactsList.addContact(contact, (event) => {
      onDelete();
      deleteContact(event);
    });
    counter.increaseCount();
  };

  const deleteContact = (contact) => {
    contactsList.deleteContact(contact);
    counter.decreaseCount();
  };

  const destroy = () => {
    element.remove();
  };

  return {
    element,
    getCount: () => counter.getCount(),
    addContact,
    deleteContact,
    destroy,
  };
};

const create = (character, counter, contactsList) => {
  const element = createElementWithClassNames("li", "alphabet__item", "letter");
  const heading = createElementWithClassNames("div", "letter__heading");
  const name = createElementWithClassNames("span", "letter__name");

  contactsList.element.hidden = true;

  heading.addEventListener("click", () => {
    contactsList.element.hidden = !contactsList.element.hidden;
    element.classList.toggle("letter--opened");
  });

  element.dataset.letter = character;

  name.textContent = character;

  heading.append(name, counter.element);
  element.append(heading);
  element.append(contactsList.element);

  return element;
};

export default setupLetter;
