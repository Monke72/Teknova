import ProductsCart from "@entities/products/ui/ProductsCart/ProductsCart";
import SearchProducts from "@features/SearchProducts/ui/SearchInput/SearchInput";
import SearchSider from "@features/SearchProducts/ui/SearchSider/SearchSider";
import { useAppSelector } from "@shared/hooks/reduxHooks";
import { ProductCartStyle } from "@shared/types/globalTypes";
import "./AllProducts.scss";
import { useState } from "react";

const AllProducts = () => {
  const products = useAppSelector((state) => state.productsList.products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <section className="all container">
      <SearchProducts />
      <div className="all__sider-prod">
        <SearchSider
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <div className="all__products">
          {!filteredProducts.length && (
            <div className="all__not-found">
              <h1 className="not__found-title">Ничего не найдено 🤔</h1>
            </div>
          )}
          {filteredProducts.map((el) => (
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
