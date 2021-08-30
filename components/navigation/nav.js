// react

// next

// react-icons

import { FaSun } from "react-icons/fa";

// components

// react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  nav: {
    padding: {
      left: 20,
      right: 20,
    },
    height: 60,
    display: "flex",
    flexflow: "row nowrap",
    alignItems: "center",
    jusifyContent: "space-between",
    "& > *": {
      height: "100%",
    },
    backgroundColor: "grey",
  },
  logo: {
    // backgroundColor: "red",
  },
  rightNav: {
    flex: 1,
    // backgroundColor: "green",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > * + *": {
      marginLeft: 10,
    },
  },
  themeOption: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <h4>MA-Library</h4>
      </div>
      <div className={classes.rightNav}>
        <div className={classes.themeOption}>
          <FaSun />
        </div>
        <div>Login</div>
      </div>
    </nav>
  );
}
