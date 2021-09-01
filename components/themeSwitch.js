// react
import React, { useReducer } from "react";
// next
// components
// react icons
import { BiMoon, BiSun } from "react-icons/bi";

// sass styles
import Styles from "../styles/themeSwitch.module.sass";

export default function ThemeSwitch() {
  const [lightTheme, toggleTheme] = useReducer((theme) => !theme, true);
  return (
    <div className={Styles.themeSwitch}>
      <input
        type="checkbox"
        checked={lightTheme}
        onChange={() => toggleTheme()}
        id="theme"
      />
      <label htmlFor="theme" className={Styles.toggleWrapper}>
        <div className={Styles.toggle}></div>
        {/* <div className={Styles.icon}>{lightTheme ? <BiSun /> : <BiMoon />}</div> */}
      </label>
    </div>
  );
}
