// react

// next

// react-icons

import { FaSun, FaMoon, FaCloud, FaDatabase } from "react-icons/fa";
import { AiFillDatabase, AiOutlineCloud } from "react-icons/ai";
import { BiMoon, BiSun, BiCloud, BiData, BiLogInCircle } from "react-icons/bi";

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
    backgroundColor: "rgba(255, 0, 0, .1)",
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
  storageOption: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  themeOption: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
    // transition: theme.transitions.all,
    // "& > span": {
    //   display: "none",
    // },
    // "&:hover": {
    //   "& > span": {
    //     display: "inline-block",
    //   },
    // },
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
        <div className={classes.storageOption}>
          <BiCloud />
          <BiData />
        </div>
        <div className={classes.themeOption}>
          <BiSun />
          <BiMoon />
        </div>
        <div className={classes.login}>
          <span>Login</span>
          <BiLogInCircle />
        </div>
      </div>
    </nav>
  );
}
