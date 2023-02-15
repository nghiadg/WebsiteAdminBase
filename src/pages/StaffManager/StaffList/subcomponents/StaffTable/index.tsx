import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Badge, Button, Space, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC } from "react";
import { dateUtils } from "utils/date";

type Props = {
  onDeleteStaff: () => void;
};

const StaffTable: FC<Props> = ({ onDeleteStaff }) => {
  const columns: ColumnsType<any> = [
    {
      title: "Nhân sự",
    },
    {
      title: "Email",
    },
    {
      title: "Số điện thoại",
    },
    {
      title: "Trạng thái",
      render: () => <Badge status="success" text="Hoạt động" />,
    },
    {
      title: "Ngày tạo",
      render: () => <span>{dateUtils.formatDate(new Date())}</span>,
    },
    {
      title: "",
      width: 40,
      render: () => (
        <Space>
          <Tooltip title="Chỉnh sửa">
            <Button size="small" icon={<EditOutlined />} type="text" />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button
              size="small"
              icon={<DeleteOutlined />}
              danger
              type="text"
              onClick={onDeleteStaff}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        size="small"
        columns={columns}
        dataSource={new Array(200).fill({})}
        pagination={{
          size: "default",
        }}
      />
    </>
  );
};

export default StaffTable;
