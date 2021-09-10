// react
import React, { useRef } from "react";
// nextjs

// sass styles
import Styles from "../styles/summary.module.sass";

export default function Summary() {
  // let, total: 200, read: 25, not read 175
  const statusBarRef = useRef();

  return (
    <div className={Styles.summaryContainer}>
      <div ref={statusBarRef} classname={Styles.statusBar}>
        This is status bar
      </div>
      <div>
        <div>read color</div>
        <div>total Books</div>
        <div>Not read color</div>
      </div>
    </div>
  );
}
