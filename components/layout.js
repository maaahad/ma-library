// react
// next
import dynamic from "next/dynamic";

// components
import Nav from "./nav";
import Footer from "./footer";
// import LibraryProvider from "./libraryProvider";
const LibraryProvider = dynamic(() => import("./libraryProvider"), {
  ssr: false,
});

// sass
import Styles from "../styles/layout.module.sass";

export default function Layout({ children }) {
  return (
    <div className={Styles.container}>
      <header>
        <Nav />
      </header>
      <LibraryProvider>
        <main>{children}</main>
      </LibraryProvider>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
