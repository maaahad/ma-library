import Head from "next/head";
// import styles from "../styles/Home.module.css";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    color: theme.color,
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
      <div>First option</div>
      <div>Second option</div>
    </div>
  );
}
