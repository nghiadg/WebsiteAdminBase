import React from "react";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/RightBar/RightBar.module.css";
import { Avatar, List } from "antd";

const data = [
  {
    title: "Bạn có một thông báo quan trọng",
  },
  {
    title: "Bạn có một thông báo quan trọng",
  },
  {
    title: "Bạn có một thông báo quan trọng",
  },
  {
    title: "Bạn có một thông báo quan trọng",
  },
  {
    title: "Bạn có một thông báo quan trọng",
  },
  {
    title: "Bạn có một thông báo quan trọng",
  },
  {
    title: "Bạn có một thông báo quan trọng",
  },
  {
    title: "Bạn có một thông báo quan trọng",
  },
];

const RightBar = () => {
  return (
    <div>
      <div className={styles.container}>
        <List
          header="Thông báo"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="5 phút trước"
              />
            </List.Item>
          )}
        />
        <List
          header="Hoạt động"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="5 phút trước"
              />
            </List.Item>
          )}
        />
      </div>
      <div className={styles.placeholder} />
    </div>
  );
};

export default RightBar;
