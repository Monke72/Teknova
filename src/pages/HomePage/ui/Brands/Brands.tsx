import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHooks";
import cls from "./Brands.module.scss";
import { setObject } from "@shared/store/slices/objectSlice";
import React from "react";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const products = useAppSelector((state) => state.productsList.products);
  const productsBrands = Array.from(new Set(products.map((el) => el.producer)));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClickBrand = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(setObject(e.currentTarget.textContent));
    navigate("/catalog");
  };
  return (
    <section className={`${cls.brands} container`}>
      <h1 className={cls["brands__title"]}>Бренды с которыми мы работаем</h1>
      <div className={cls["scroll-wrapper"]}>
        <ul className={cls["scroll-track"]}>
          {[...productsBrands, ...productsBrands].map((item, i) => (
            <li
              className={cls["scroll-item"]}
              key={i}
              onClick={(e) => handleClickBrand(e)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;
