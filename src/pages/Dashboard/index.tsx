import { Card, Col, Row } from "antd";
import styles from "pages/Dashboard/Dashboard.module.css";
import ExampleChart from "pages/Dashboard/subcomponents/ExampleChart";
import StatisticList from "pages/Dashboard/subcomponents/StatisticList";

const Dashboard = () => {
  return (
    <div>
      <StatisticList />
      <Row gutter={28}>
        <Col span={18}>
          <div className={styles.ratioChartContainer}>
            <Card className="darwin-card">
              <ExampleChart />
            </Card>
          </div>
        </Col>
        <Col span={6}>
          <Card className="darwin-card">Content here</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
