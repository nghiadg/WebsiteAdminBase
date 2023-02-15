import { Affix, Button, DatePicker, Drawer, Form, Select, Space } from "antd";
import React, { FC } from "react";

type Props = {
  visible?: boolean;
  onClose?: () => void;
};

const Filter: FC<Props> = ({ visible, onClose }) => {
  return (
    <Drawer
      placement="right"
      visible={visible}
      onClose={onClose}
      width={280}
      mask={false}
      title="Bộ lọc"
    >
      <div>
        <div>
          <Form layout="vertical">
            <Form.Item label="Trạng thái">
              <Select placeholder="Trạng thái">
                <Select.Option>Trạng thái</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Ngày tạo">
              <DatePicker.RangePicker />
            </Form.Item>
          </Form>
        </div>

        <Affix offsetBottom={24}>
          <Space>
            <Button type="primary">Xác nhận</Button>
            <Button>Xóa lọc</Button>
          </Space>
        </Affix>
      </div>
    </Drawer>
  );
};

export default Filter;
