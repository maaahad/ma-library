// react

// next

// react-icons

import { BiMoon, BiSun, BiCloud, BiData, BiLogInCircle } from "react-icons/bi";

// components

export default function Nav() {
  return (
    <nav>
      <div>
        <h4>MA-Library</h4>
      </div>
      <div>
        <div>
          <BiCloud />
          <BiData />
        </div>
        <div>
          <BiSun />
          <BiMoon />
        </div>
        <div>
          <span>Login</span>
          <BiLogInCircle />
        </div>
      </div>
    </nav>
  );
}
