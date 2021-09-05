// react
// next
import dynamic from "next/dynamic";

// react icons
import { BiCopyright } from "react-icons/bi";

// components
import Nav from "./nav";
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
        <div>
          <div>
            <BiCopyright />
          </div>
          {/* make this a link */}
          <span>Muhammed Ahad</span>
        </div>
      </footer>
    </div>
  );
}
