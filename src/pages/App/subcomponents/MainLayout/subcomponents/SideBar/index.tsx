import { DashboardOutlined, IdcardOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/SideBar/Sidebar.module.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ACCOUNT, DEFAULT, STAFF_LIST } from "routes/route.constant";

type SubMenuItem = {
  title: string;
  path: string;
};

type MenuItem = {
  title: string;
  key: string;
  submenus?: Array<SubMenuItem>;
  icon?: ReactNode;
  path?: string;
};

const menus: Array<MenuItem> = [
  {
    title: "Thống kê chung",
    key: "dashboard",
    icon: <DashboardOutlined />,
    path: DEFAULT,
  },
  {
    title: "Quản lý nhân sự",
    key: "staff",
    icon: <IdcardOutlined />,
    submenus: [
      {
        title: "Danh sách nhân sự",
        path: STAFF_LIST,
      },
    ],
  },
  {
    title: "Cài đặt tài khoản",
    key: "account",
    icon: <DashboardOutlined />,
    path: ACCOUNT,
  },
];

const SideBar = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <Avatar src="" />
          <div>Darwin Tech.</div>
        </div>
        <Menu mode="inline" className={styles.menu}>
          {menus.map((menu) =>
            menu.submenus ? (
              <Menu.SubMenu key={menu.key} title={menu.title} icon={menu.icon}>
                {menu.submenus &&
                  menu.submenus.map((submenu) => (
                    <Menu.Item key={submenu.path}>
                      <Link to={submenu.path}>{submenu.title}</Link>
                    </Menu.Item>
                  ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={menu.key} icon={menu.icon}>
                <Link to={menu.path || "/"}>{menu.title}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </div>
      <div className={styles.placeholder} />
    </div>
  );
};

export default SideBar;
