import { useEffect, useState } from "react";
import cls from "./GlobalLoader.module.scss";
import { useAppSelector } from "@shared/hooks/reduxHooks";

export const GlobalProgressOverlay = () => {
  const loading = useAppSelector((state) => state.productsList.loading); // Пример
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (loading) {
      setVisible(true);
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 80) return prev + 1; // скорость до 80%
          return prev;
        });
      }, 20); // ~2% в 40мс => ~1.6 сек до 80%
    } else {
      clearInterval(interval);
      setProgress(100);

      const timeout = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 500); // ждём завершения анимации
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return visible ? (
    <div className={cls.overlay}>
      <div
        className={cls.progress}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  ) : null;
};
