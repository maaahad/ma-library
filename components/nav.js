// react
import React, { useState, useReducer } from "react";
// next

// react-icons
import { BiMoon, BiSun, BiCloud, BiData, BiLogInCircle } from "react-icons/bi";

// components
import ThemeSwitch from "./themeSwitch";

// google login
import { GoogleLogin } from "react-google-login";

// sass stylesheets
import Styles from "../styles/nav.module.sass";

export default function Nav() {
  // const [lighttheme, toggleTheme] = useReducer(
  //   (lighttheme) => !lighttheme,
  //   true
  // );
  // const [localStorage, toggleStorage] = useReducer(
  //   (localStorage) => !localStorage,
  //   true
  // );

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <nav className={Styles.container}>
      <div className={Styles.logo}>
        <h4>MA-Library</h4>
      </div>
      <div className={Styles.right_nav}>
        <GoogleLogin
          clientId="156654352631-1o9rclb8asek825bnbf1f1iv5700vdq9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        {/* <button type="button" className={Styles.login}>
          <span>Login</span>
          <BiLogInCircle />
        </button> */}
      </div>
    </nav>
  );
}
