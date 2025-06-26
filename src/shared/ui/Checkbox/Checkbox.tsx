import React from "react";
import cls from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  id: string;
}

const Checkbox = ({ label, checked, id }: CheckboxProps) => {
  return (
    <div className={cls["checkbox"]}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className={cls["checkbox__input"]}
      />
      <label htmlFor={id} className={cls["checkbox__label"]}>
        <span className={cls["checkbox__custom"]}></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
