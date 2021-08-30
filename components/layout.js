// setting up theme from react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
  head: {
    height: 60,
  },
  main: {
    flex: 1,
    backgroundColor: "green",
  },
  footer: {
    height: 80,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <header className={classes.head}>
        <nav>
          <div>MA - Library</div>
          <div>Login option</div>
        </nav>
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        <div>Developed by Muhammed Ahad</div>
      </footer>
    </div>
  );
}
