import {
  ExclamationCircleOutlined,
  FilterOutlined,
  PlusOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Badge, Button, Input, Modal, Space, Tooltip } from "antd";
import styles from "pages/StaffManager/StaffList/StaffList.module.css";
import StaffTable from "pages/StaffManager/StaffList/subcomponents/StaffTable";
import Filter from "pages/StaffManager/StaffList/subcomponents/Filter";
import { useState } from "react";

const StaffList = () => {
  const [isShowFilter, setIsShowFilter] = useState<boolean>(false);

  const showConfirmDeleteStaff = () => {
    Modal.confirm({
      title: "Cảnh báo !!",
      icon: <ExclamationCircleOutlined />,
      content: "Việc xóa này không thể khôi phục. Bạn chắc chắn muốn tiếp tục?",
    });
  };

  return (
    <>
      <div className={styles.actionBar}>
        <Space>
          <Tooltip title="Thêm mới">
            <Button icon={<PlusOutlined />} type="text" />
          </Tooltip>
          <Tooltip title="Bộ lọc">
            <Button
              icon={
                <Badge dot>
                  <FilterOutlined />
                </Badge>
              }
              type="text"
              onClick={() => setIsShowFilter(true)}
            />
          </Tooltip>
          <Tooltip title="Làm mới">
            <Button icon={<ReloadOutlined />} type="text" />
          </Tooltip>
        </Space>
        <div>
          <Input prefix={<SearchOutlined />} placeholder="Tìm kiếm" />
        </div>
      </div>
      <StaffTable onDeleteStaff={showConfirmDeleteStaff} />
      <Filter visible={isShowFilter} onClose={() => setIsShowFilter(false)} />
    </>
  );
};

export default StaffList;
