import "../styles/globals.css";

import Layout from "../components/layout";

// setting up theme from react-jss
import { ThemeProvider } from "react-jss";

const theme = {
  color: "red",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
