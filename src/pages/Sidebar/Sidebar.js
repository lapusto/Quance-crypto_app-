import styles from "./Sidebar.module.scss";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import { ReactComponent as Dashboard }  from "images/sidebar/dashboard.svg";
import { ReactComponent as Exchange }  from "images/sidebar/exchange.svg";
import { ReactComponent as Settings }  from "images/sidebar/settings.svg";
import { ReactComponent as Algorithms }  from "images/sidebar/algorithms.svg";
import { ReactComponent as Support }  from "images/sidebar/support.svg";
import { useState } from "react";

const Sidebar = () => {
  const menu = [
    {
      name: "dashboard",
      icon:  <Dashboard/>,
    },
    {
      name: "exchange",
      icon: <Exchange/>,
    },
    {
      name: "algorithms",
      icon: <Algorithms/>,
    },
    {
      name: "settings",
      icon: <Settings/>,
    },
    {
      name: "support",
      icon: <Support/>,
    },
  ];

  const [active, setActive] = useState(menu[0].name);

  return (
    <div className={styles.Sidebar}>
      {menu.map((item, index) => (
        <SidebarItem
          item={item}
          key={`sidebar-${index}`}
          onClick={() => setActive(item.name)}
          isActive={active == item.name}
        />
      ))}
    </div>
  );
};

export default Sidebar;
