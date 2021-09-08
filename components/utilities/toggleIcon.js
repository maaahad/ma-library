// react
// next

// react icons

// Sass styles
import Styles from "../../styles/utilities/toggleIcon.module.sass";

export default function ToggleIcon({
  checked,
  id,
  leftIcon,
  rightIcon,
  toggleIcon = (f) => f,
}) {
  console.log("Checked: ", checked);
  return (
    <div className={Styles.toogleIconContainer}>
      <input id={id} type="checkbox" checked={checked} onChange={toggleIcon} />
      <label htmlFor={id} className={Styles.iconGroup}>
        <div className={Styles.tableView}>{leftIcon}</div>
        <div className={Styles.gridView}>{rightIcon}</div>
      </label>
    </div>
  );
}
