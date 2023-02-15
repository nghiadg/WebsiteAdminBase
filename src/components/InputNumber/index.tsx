import { Input, InputProps } from "antd";
import React, { ChangeEvent, FC } from "react";
import { formatNumber } from "utils/number";

type Props = {
  value: string;
  onChange: (value: string) => void;
  allowNegative?: boolean;
  disableComma?: boolean;
};

const InputNumber: FC<Props & Omit<InputProps, "onChange" | "value">> = ({
  value,
  onChange,
  allowNegative,
  disableComma,
  ...props
}) => {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    let { value: _value } = evt.target;
    if (!disableComma) {
      _value = _value.replaceAll(",", "");
    }
    let regex = /^-?\d*(\.\d*)?$/;
    if (!allowNegative) {
      regex = /^\d*(\.\d*)?$/;
    }
    if (
      regex.test(_value) ||
      _value === "" ||
      (allowNegative && _value === "-")
    ) {
      onChange(_value);
    }
  };

  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(0) === ".") {
      valueTemp = "0" + value;
    }
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };

  return (
    <Input
      onChange={handleChange}
      onBlur={handleBlur}
      value={disableComma ? value : formatNumber(value)}
      {...props}
    />
  );
};

export default InputNumber;
