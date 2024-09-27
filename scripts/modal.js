const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");

const setupModal = (contentElement) => {
  modalContent.innerHTML = "";
  modalContent.append(contentElement);

  const show = () => {
    modal.hidden = false;
  };

  const hide = () => {
    modal.hidden = true;
  };

  const toggleHidden = () => {
    modal.hidden = !modal.hidden;
  };

  return {
    show,
    hide,
    toggleHidden,
  };
};

export default setupModal;
