// import
// next js
import Link from "next/link";

// react icons
import { BiCopyright, BiHeartCircle } from "react-icons/bi";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

// sass styles
import Styles from "../styles/footer.module.sass";

export default function Footer() {
  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.socialLinks}>
        <h6>Connect with me : </h6>
        <Link href="https://se.linkedin.com/in/muhammed-ahad-ba625986" passHref>
          <a target="_blank" title="Linkedin">
            <FaLinkedin />
          </a>
        </Link>
        <Link href="https://github.com/maaahad" passHref>
          <a target="_blank" title="Github">
            <FaGithubSquare />
          </a>
        </Link>
      </div>
      <p className={Styles.copyright}>
        Made with{" "}
        <span>
          <BiHeartCircle />
        </span>{" "}
        by MUHAMMED AHAD
      </p>
    </div>
  );
}
