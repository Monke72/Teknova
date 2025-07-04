import React from "react";

export const changeInput = <T extends string | number | null>(
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<T>>,
) => {
  const value = e.target.value.trim();

  setState((prev) => {
    if (typeof prev === "number" || typeof prev === "object") {
      // Обрабатываем пустую строку как null
      return (value === "" ? null : Number(value)) as T;
    }
    return value as T;
  });
};
