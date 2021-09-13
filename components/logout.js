// react
// react icons
import { BiLogOutCircle } from "react-icons/bi";

// react-google-login
import { useGoogleLogout } from "react-google-login";

// sass style
import Styles from "../styles/logout.module.sass";

const clientId =
  "156654352631-1o9rclb8asek825bnbf1f1iv5700vdq9.apps.googleusercontent.com";

export default function Logout({ setUserObject = (f) => f }) {
  const onLogoutSuccess = (res) => {
    console.log("You are successfully logged out");
    setUserObject(null);
  };
  const onFailure = (res) => {
    console.log("Logged out failed: TODO: need to handle this...");
  };

  const { signOut } = useGoogleLogout({
    onLogoutSuccess,
    onFailure,
    clientId,
  });

  return (
    <button type="button" className={Styles.logoutButton} onClick={signOut}>
      <span>Logout</span>
      <BiLogOutCircle />
    </button>
  );
}
