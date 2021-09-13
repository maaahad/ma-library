// react
// react icons
import { BiLogInCircle } from "react-icons/bi";

// react-google-login
import { useGoogleLogin } from "react-google-login";

// sass style
import Styles from "../styles/login.module.sass";

const clientId =
  "156654352631-1o9rclb8asek825bnbf1f1iv5700vdq9.apps.googleusercontent.com";

export default function Login({ setUserObject = (f) => f }) {
  const onSuccess = (res) => {
    console.log("Successfully logged in : ", res.profileObj);
    setUserObject(res.profileObj);
    // todo refresh token setup
  };
  const onFailure = (res) => {
    console.log("Logged in failed: ", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
  });

  return (
    <button type="button" className={Styles.loginButton} onClick={signIn}>
      <span>Login with Google</span>
      <BiLogInCircle />
    </button>
  );
}
