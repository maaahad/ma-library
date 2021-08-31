// react
// next

// components
import Nav from "./nav";

// sass
import Styles from "../styles/layout.module.sass";

export default function Layout({ children }) {
  return (
    <div className={Styles.container}>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <div>Developed by Muhammed Ahad</div>
      </footer>
    </div>
  );
}
