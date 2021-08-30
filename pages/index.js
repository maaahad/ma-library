// react

// next
import Head from "next/head";

// components
import MainTop from "../components/mainTop";

// react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  sourceNInfo: {
    backgroundColor: "yellow",
    // width and height will be fixed later
    width: 20,
    height: 40,
    position: "fixed",
    top: "calc(50% - 20px)",
    left: 0,
    transition: theme.transitions.all,
  },

  books: {
    backgroundColor: "red",
  },

  "@media screen and (min-width: 600px)": {
    sourceNInfo: {
      left: "calc(100% - 20px)",
    },
  },
}));

export default function Home() {
  const classes = useStyles("blue");
  return (
    <div className={classes.container}>
      <Head>
        <title>MA - Library</title>
        <meta
          name="description"
          content="Library project developed for The Odin Project's Full Stack JavaScript Course"
        />
      </Head>
      {/* the following will be part of main */}
      <div className={classes.mainTop}>
        <MainTop />
      </div>
      <div className={classes.sourceNInfo}>
        <div>S</div>
        <div>I</div>
      </div>
      <div className={classes.books}>
        <div>Category + Filter + Sorting</div>
        <div>Books Tablelist / Card list</div>
      </div>
    </div>
  );
}
