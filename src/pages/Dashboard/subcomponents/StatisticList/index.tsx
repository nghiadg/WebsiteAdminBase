import { Select, Space, Statistic } from "antd";
import styles from "pages/Dashboard/subcomponents/StatisticList/StatisticList.module.css";

const StatisticList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectWrapper}>
        <Select bordered={false} value="1">
          <Select.Option value="1">Hôm nay</Select.Option>
          <Select.Option value="2">Tuần vừa qua</Select.Option>
          <Select.Option value="3">Tháng vừa qua</Select.Option>
        </Select>
      </div>
      <Space size="large">
        <Statistic
          className={styles.statisticItem}
          title="Active"
          value={11.28}
          precision={2}
          suffix="%"
        />
        <Statistic
          className={styles.statisticItem}
          title="Active"
          value={11.28}
          precision={2}
          suffix="%"
        />
        <Statistic
          className={styles.statisticItem}
          title="Active"
          value={11.28}
          precision={2}
          suffix="%"
        />
      </Space>
    </div>
  );
};

export default StatisticList;
