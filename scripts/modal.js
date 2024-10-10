const modalTemplate = document.querySelector("#modal");

const setupModal = (contentElement) => {
  const element = create(contentElement);

  const closeButtonElement = element.querySelector(".modal__close-button");

  const show = () => {
    element.hidden = false;
  };

  const hide = () => {
    console.log(element);
    element.hidden = true;
  };

  const toggleHidden = () => {
    element.hidden = !modal.hidden;
  };

  //@TODO: element.remove does not work with  elements created from templates
  const destroy = () => {
    element.remove();
  };

  closeButtonElement.addEventListener("click", hide);

  return {
    element,
    show,
    hide,
    toggleHidden,
    destroy,
  };
};

const create = (contentElement) => {
  const element = modalTemplate.content.cloneNode(true);

  const modal = element.querySelector(".modal");
  const modalContentElement = element.querySelector(".modal__content");

  modalContentElement.append(contentElement);

  modal.hidden = true;
  console.log(modal);

  return modal;
};

export default setupModal;
