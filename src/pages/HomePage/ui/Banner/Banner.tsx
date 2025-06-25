import React from "react";
import cls from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={`${cls.banner} container`}>
      <div className={cls["banner__apple"]}></div>
      <div className={cls["banner__wrapper"]}>
        <div className={cls["banner__samsung"]}></div>
        <div className={cls["banner__dyson"]}></div>
      </div>
    </section>
  );
};

export default Banner;
