import ProductsCart from "@entities/products/ui/ProductsCart/ProductsCart";
import SearchInput from "@features/SearchProducts/ui/SearchInput/SearchInput";
import SearchSider from "@features/SearchProducts/ui/SearchSider/SearchSider";
import { IProducts, ProductCartStyle } from "@shared/types/globalTypes";
import "./AllProducts.scss";
import { useState } from "react";

const AllProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);

  return (
    <section className="all container">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="all__sider-prod">
        <SearchSider
          searchValue={searchValue}
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
