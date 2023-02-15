import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Input, Space } from "antd";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Breadcrumb>
        <Breadcrumb.Item>Dashboards</Breadcrumb.Item>
        <Breadcrumb.Item>Default</Breadcrumb.Item>
      </Breadcrumb>
      <Space size="large">
        <Input prefix={<SearchOutlined />} placeholder="Tìm kiếm" />
        <Button icon={<BellOutlined />} shape="circle" type="text" />
      </Space>
    </header>
  );
};

export default Header;
