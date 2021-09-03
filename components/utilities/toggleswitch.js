// react
import React, { useReducer } from "react";

// next

// react icons

// sass styles
import Styles from "../../styles/toggleswitch.module.sass";

export default function ToggleSwitch() {
  const [checked, toggleChecked] = useReducer((checked) => !checked, false);
  return (
    <div className={Styles.toggleSwitch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggleChecked()}
        id="toggle"
      />
      <label htmlFor="toggle" className={Styles.toggleWrapper}>
        <div className={Styles.toggle}></div>
        <p className={Styles.checkedItem}>Read</p>
        <p className={Styles.notCheckedItem}>Not Read</p>
      </label>
    </div>
  );
}
