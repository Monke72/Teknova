import { useAppSelector } from "@app/Provider";
import cls from "./Brands.module.scss";

const Brands = () => {
  const products = useAppSelector((state) => state.productsList.products);
  const productsBrands = Array.from(new Set(products.map((el) => el.producer)));
  return (
    <section className={`${cls.brands} container`}>
      <h1 className={cls["brands__title"]}>Бренды с которыми мы работаем</h1>
      <div className={cls["scroll-wrapper"]}>
        <ul className={cls["scroll-track"]}>
          {[...productsBrands, ...productsBrands].map((item, i) => (
            <li className={cls["scroll-item"]} key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;
