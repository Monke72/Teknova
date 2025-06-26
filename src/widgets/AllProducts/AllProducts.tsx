import ProductsCart from "@entities/products/ui/ProductsCart/ProductsCart";
import SearchProducts from "@features/SearchProducts/ui/SearchInput/SearchInput";
import SearchSider from "@features/SearchProducts/ui/SearchSider/SearchSider";
import { useAppSelector } from "@shared/hooks/reduxHooks";
import { ProductCartStyle } from "@shared/types/globalTypes";
import "./AllProducts.scss";

const AllProducts = () => {
  const products = useAppSelector((state) => state.productsList.products);
  return (
    <section className="all container">
      <SearchProducts />
      <div className="all__sider-prod">
        <SearchSider />
        <div className="all__products">
          {products.map((el) => (
            <ProductsCart
              key={el.id}
              styleType={ProductCartStyle.All}
              {...el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
