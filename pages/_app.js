import "../styles/globals.css";

// component
import Layout from "../components/layout";

// themes
import lightTheme from "../themes/light";

// setting up theme from react-jss
import { ThemeProvider } from "react-jss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
