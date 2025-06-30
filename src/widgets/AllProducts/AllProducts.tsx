import SearchInput from "@features/SearchProducts/ui/SearchInput/SearchInput";
import SearchSider from "@features/SearchProducts/ui/SearchSider/SearchSider";
import { IProducts, ProductCartStyle } from "@shared/types/globalTypes";
import "./AllProducts.scss";
import { useState } from "react";
import ProductCardWithDetails from "@features/ProductCardWithDetails/ui/ProductCardWithDetails";
import { useAppSelector } from "@shared/hooks/reduxHooks";

const AllProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const products = useAppSelector((state) => state.productsList.products);
  const [filteredProducts, setFilteredProducts] =
    useState<IProducts[]>(products);

  console.log(filteredProducts);

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
            <ProductCardWithDetails
              key={el.id}
              styleType={ProductCartStyle.All}
              el={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
