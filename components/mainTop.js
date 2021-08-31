// react
// next

// react-icons
import { BiTrash, BiBookAdd } from "react-icons/bi";

// clsx
import clsx from "clsx";

export default function MainTop() {
  return (
    <div>
      <div>
        <BiTrash />
        <span>Clear Store</span>
      </div>
      <div>Summary</div>
      <div>
        <span>Add Book</span>
        <BiBookAdd />
      </div>
    </div>
  );
}
