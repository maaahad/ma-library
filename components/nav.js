// react
import React, { useState, useReducer } from "react";
// next

// react-icons

import { BiMoon, BiSun, BiCloud, BiData, BiLogInCircle } from "react-icons/bi";

// components

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
        <div className={Styles.storage}>
          <input
            type="checkbox"
            checked={localStorage}
            onChange={() => toggleStorage()}
            id="storage"
          />
          <label for="storage">
            {localStorage ? (
              <div>
                <BiCloud />
              </div>
            ) : (
              <div>
                <BiData />
              </div>
            )}
          </label>
        </div>
        <div className={Styles.theme}>
          <input
            type="checkbox"
            checked={lighttheme}
            onChange={() => toggleTheme()}
            id="theme"
          />
          <label for="theme">
            {lighttheme ? (
              <div>
                <BiSun />
              </div>
            ) : (
              <div>
                <BiMoon />
              </div>
            )}
          </label>
        </div>
        <div>
          <span>Login</span>
          <BiLogInCircle />
        </div>
      </div>
    </nav>
  );
}
