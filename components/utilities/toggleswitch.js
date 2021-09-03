// react
import React, { useReducer } from "react";

// next

// react icons

// sass styles
import Styles from "../../styles/toggleswitch.module.sass";

export default function ToggleSwitch({
  checked,
  id,
  checkedText,
  uncheckedText,
  toggleStatus = (f) => f,
}) {
  return (
    <div className={Styles.toggleSwitch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggleStatus()}
        id={id}
      />
      <label htmlFor={id} className={Styles.toggleWrapper}>
        <div className={Styles.toggle}></div>
        <p className={Styles.checkedItem}>{checkedText}</p>
        <p className={Styles.notCheckedItem}>{uncheckedText}</p>
      </label>
    </div>
  );
}
