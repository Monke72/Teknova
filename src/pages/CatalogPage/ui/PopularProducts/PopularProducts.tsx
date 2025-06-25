import { useAppSelector } from "@shared/hooks/reduxHooks";
import "./PopularProducts.scss";
import ProductsCart from "@entities/products/ui/ProductsCart/ProductsCart";

const PopularProducts = () => {
  const products = useAppSelector((state) => state.productsList.products);
  return (
    <section className="popular container">
      <h1 className="popular__title">Популярные товары</h1>
      <ul className="popular__list">
        {products
          .filter((el) => el.popular)
          .map((el) => (
            <ProductsCart key={el.id} {...el} />
          ))}
      </ul>
    </section>
  );
};

export default PopularProducts;
