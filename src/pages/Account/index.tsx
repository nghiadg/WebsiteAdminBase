import { Tabs } from "antd";
import React from "react";

const Account = () => {
  return (
    <>
      <Tabs>
        <Tabs.TabPane tab="Tổng quan" key="overview">
          Conntent 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Cài đặt" key="setting">
          Content 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Thay đổi mật khẩu" key="changePassword">
          Conntent 1
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Account;
