import styles from "./SidebarItem.module.scss";
import cn from "classnames";
import { ReactComponent as Logo } from "images/sidebar/dashboard.svg";

export const SidebarItem = ({ item, onClick, isActive }) => {

  return (
    <div
      onClick={onClick}
      className={cn(styles.sidebarItem, {
        [styles.active]: isActive,
      })}>
      <div className={styles.logo}>{item.icon}</div>
      {isActive && <hr className={styles.divider}/>}
      <div>
        {item.name}
      </div>
    </div>
  );
};
