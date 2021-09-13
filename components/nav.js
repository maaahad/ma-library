// react
import React, { useState, useReducer } from "react";
// next

// components
import Login from "./login";
import Logout from "./logout";
// sass stylesheets
import Styles from "../styles/nav.module.sass";

export default function Nav() {
  const [userObject, setUserObject] = useState(null);
  return (
    <nav className={Styles.container}>
      <div className={Styles.logo}>
        <h4>MA-Library</h4>
      </div>
      <div className={Styles.right_nav}>
        {!userObject && <Login setUserObject={setUserObject} />}
        {userObject && (
          <>
            <h6>{userObject.name}</h6>
            <Logout setUserObject={setUserObject} />
          </>
        )}
      </div>
    </nav>
  );
}
