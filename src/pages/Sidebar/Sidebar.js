import styles from "./Sidebar.module.scss";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import { ReactComponent as Dashboard }  from "images/sidebar/dashboard.svg";
import { ReactComponent as Exchange }  from "images/sidebar/exchange.svg";
import { ReactComponent as Settings }  from "images/sidebar/settings.svg";
import { ReactComponent as Algorithms }  from "images/sidebar/algorithms.svg";
import { ReactComponent as Support }  from "images/sidebar/support.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className={styles.sidebar}>
      {menu.map((item, index) => (
        <Link to={
          index === 0 ? "/" : `/${item.name}`}
          key={`sidebar-${index}`}>
         <SidebarItem
          item={item}
          key={`sidebar-${index}`}
          onClick={() => setActive(item.name)}
          isActive={active == item.name}
        />
        </Link>
       
      ))}
    </div>
  );
};

export default Sidebar;
