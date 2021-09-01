// react
import React, { useState, useReducer } from "react";
// next

// react-icons

import { BiMoon, BiSun, BiCloud, BiData, BiLogInCircle } from "react-icons/bi";

// components
import ThemeSwitch from "./themeSwitch";

// sass stylesheets
import Styles from "../styles/nav.module.sass";

export default function Nav() {
  const [lighttheme, toggleTheme] = useReducer(
    (lighttheme) => !lighttheme,
    true
  );
  const [localStorage, toggleStorage] = useReducer(
    (localStorage) => !localStorage,
    true
  );
  return (
    <nav className={Styles.container}>
      <div className={Styles.logo}>
        <h4>MA-Library</h4>
      </div>
      <div className={Styles.right_nav}>
        <div className={Styles.storage}>Storage</div>
        <div className={Styles.theme}>theme</div>
        <div className={Styles.login}>Login</div>
      </div>
    </nav>
  );
}
