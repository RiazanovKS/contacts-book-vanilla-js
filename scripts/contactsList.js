import { createElementWithClassNames } from "./utils";

const contactTemplate = document.querySelector("#contact-item-template");

export const setupContactsList = () => {
  const element = createContactsList();

  const addContact = (contact, onDelete) => {
    const contactElement = createContact(contact, onDelete);

    element.append(contactElement);
  };

  const deleteContact = (event) => {
    const contactElement = event.target.closest(".contact-item");
    contactElement.remove();
  };

  const clearContacts = () => {
    element.innerHTML = "";
  };

  const destroy = () => {
    element.remove();
  };

  return {
    element,
    addContact,
    deleteContact,
    clearContacts,
    destroy,
  };
};

const createContactsList = () => {
  const element = createElementWithClassNames("ul", "letter__contacts-list");

  return element;
};

function createContact({ name, vacancy, phone }, onDelete) {
  const contactItem = contactTemplate.content.cloneNode(true);

  const nameElement = contactItem.querySelector(".contact-item__name");
  const vacancyElement = contactItem.querySelector(".contact-item__vacancy");
  const phoneElement = contactItem.querySelector(".contact-item__phone");

  const deleteButton = contactItem.querySelector(
    ".contact-item__delete-button",
  );

  nameElement.textContent += name;
  vacancyElement.textContent += vacancy;
  phoneElement.textContent += phone;

  deleteButton.addEventListener("click", onDelete);

  return contactItem;
}
