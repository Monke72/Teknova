import React from "react";
import cls from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  id: string;
  onChange: () => void;
  disabled?: boolean;
}

const Checkbox = ({
  label,
  checked,
  id,
  onChange,
  disabled,
}: CheckboxProps) => {
  return (
    <div className={`${cls["checkbox"]} ${disabled ? cls.disabled : ""}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className={cls["checkbox__input"]}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id} className={cls["checkbox__label"]}>
        <span className={cls["checkbox__custom"]}></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
