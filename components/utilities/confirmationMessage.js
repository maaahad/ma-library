// react
// nextjs

// react icons
// react icons
import { BiTrash, BiCheckSquare, BiLeftArrowAlt } from "react-icons/bi";

// sass styles
import Styles from "../../styles/utilities/confirmationMessage.module.sass";

export default function ConfirmationMessage({
  confirmationText,
  confirmButtonText,
  cancelButtonText,
  onConfirmButtonClick = (f) => f,
  onCancelButtonClick = (f) => f,
}) {
  return (
    // width and height of the container will be set by user using child combinator
    <div className={Styles.messageContainer}>
      <h6>{confirmationText}</h6>
      <div className={Styles.buttonGroup}>
        <button
          type="button"
          onClick={onCancelButtonClick}
          className={Styles.cancelButton}
        >
          <BiLeftArrowAlt />
          <span>{cancelButtonText}</span>
        </button>
        <button
          type="button"
          onClick={onConfirmButtonClick}
          className={Styles.confirmButton}
        >
          <span>{confirmButtonText}</span>
          <BiTrash />
        </button>
      </div>
    </div>
  );
}
