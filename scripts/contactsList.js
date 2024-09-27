const contactTemplate = document.querySelector("#contact-item-template");

export const setupContactsList = (element) => {
  if (!element) {
    element = createContactsList();
  }

  const addContact = (name, vacancy, phone, onDelete) => {
    const contact = createContact(name, vacancy, phone, onDelete);

    element.append(contact);
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
  const element = document.createElement("ul");

  element.classList.add("contacts-list");

  return element;
};

function createContact(name, vacancy, phone, onDelete) {
  const contactItem = contactTemplate.content.cloneNode(true);

  const nameElement = contactItem.querySelector(".js-contact-info-name");
  const vacancyElement = contactItem.querySelector(".js-contact-info-vacancy");
  const phoneElement = contactItem.querySelector(".js-contact-info-phone");
  const deleteButton = contactItem.querySelector(".contact-delete-button");

  nameElement.textContent += name;
  vacancyElement.textContent += vacancy;
  phoneElement.textContent += phone;

  deleteButton.addEventListener("click", onDelete);

  return contactItem;
}
