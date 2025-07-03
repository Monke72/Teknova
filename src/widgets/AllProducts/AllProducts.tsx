import SearchInput from "@features/SearchProducts/ui/SearchInput/SearchInput";
import SearchSider from "@features/SearchProducts/ui/SearchSider/SearchSider";
import { IProducts, ProductCartStyle } from "@shared/types/globalTypes";
import cls from "./AllProducts.module.scss";
import { useEffect, useState } from "react";
import ProductCardWithDetails from "@features/ProductCardWithDetails/ui/ProductCardWithDetails";
import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHooks";
import { clearText } from "@shared/store/slices/textSlice";
import { useIsWidth } from "@shared/hooks/useIsWidth";

const AllProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const products = useAppSelector((state) => state.productsList.products);
  console.log(products);

  const [filteredProducts, setFilteredProducts] =
    useState<IProducts[]>(products);
  const text = useAppSelector((state) => state.text.text);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (text) {
      setSearchValue(text);
      dispatch(clearText());
    }
  }, [text, dispatch]);

  //mobile
  const isMobile = useIsWidth(799);
  const [openSider, setOpenSider] = useState<boolean>(false);

  return (
    <section className={`${cls.all} container`}>
      {isMobile ? (
        <SearchInput
          openSider={openSider}
          setOpenSider={setOpenSider}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isMobile={isMobile}
        />
      ) : (
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
      <div className={cls["all__sider-prod"]}>
        {!isMobile && (
          <SearchSider
            className="desktop"
            searchValue={searchValue}
            setFilteredProducts={setFilteredProducts}
          />
        )}
        {isMobile && (
          <SearchSider
            openSider={openSider}
            className="mobile"
            searchValue={searchValue}
            setFilteredProducts={setFilteredProducts}
          />
        )}

        <div className={cls["all__products"]}>
          {!filteredProducts.length && (
            <div className={cls["all__not-found"]}>
              <h1 className={cls["not__found-title"]}>Ничего не найдено 🤔</h1>
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
