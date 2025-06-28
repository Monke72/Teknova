import { useAppSelector } from "@shared/hooks/reduxHooks";
import cls from "./PopularProducts.module.scss";

import { ProductCartStyle } from "@shared/types/globalTypes";
import ProductCardWithDetails from "@features/ProductCardWithDetails/ui/ProductCardWithDetails";

const PopularProducts = () => {
  const products = useAppSelector((state) => state.productsList.products);
  return (
    <section className={`${cls.popular} container`}>
      <h1 className={cls["popular__title"]}>Популярные товары</h1>
      <ul className={cls["popular__list"]}>
        {products
          .filter((el) => el.popular)
          .map((el) => (
            <ProductCardWithDetails
              styleType={ProductCartStyle.Popular}
              key={el.id}
              el={el}
            />
          ))}
      </ul>
    </section>
  );
};

export default PopularProducts;
