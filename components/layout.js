// react
// next

// components
import Nav from "./navigation/nav";
// react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    position: "relative",
    padding: {
      left: 20,
      right: 20,
    },
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
  head: {
    width: "100%",
    height: 60,
    position: "fixed",
    top: 0,
    left: 0,
  },
  main: {
    marginTop: 70,
    flex: 1,
  },
  footer: {
    height: 40,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <header className={classes.head}>
        <Nav />
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        <div>Developed by Muhammed Ahad</div>
      </footer>
    </div>
  );
}
