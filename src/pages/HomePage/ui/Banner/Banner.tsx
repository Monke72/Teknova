import React from "react";
import cls from "./Banner.module.scss";
import { useAppDispatch } from "@shared/hooks/reduxHooks";
import { setText } from "@shared/store/slices/textSlice";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchProductByBanners = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.dataset.name;
    dispatch(setText(text));
    navigate("/catalog");
  };

  return (
    <section className={`${cls.banner} container`}>
      <div
        data-name="iphone 16"
        className={cls["banner__apple"]}
        onClick={(e) => searchProductByBanners(e)}
      ></div>
      <div className={cls["banner__wrapper"]}>
        <div
          data-name="samsung galaxy s23"
          className={cls["banner__samsung"]}
          onClick={(e) => searchProductByBanners(e)}
        ></div>
        <div
          data-name="Dyson Supersonic"
          className={cls["banner__dyson"]}
          onClick={(e) => searchProductByBanners(e)}
        ></div>
      </div>
    </section>
  );
};

export default Banner;
