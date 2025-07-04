// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SearchProducts from "@features/SearchProducts/ui/SearchInput/SearchInput";
import Navbar from "@widgets/Navbar/Navbar";
import PopularProducts from "./ui/PopularProducts/PopularProducts";
import Categories from "./ui/Categories/Categories";
import { useEffect, useState } from "react";
import { CategorieType } from "./types/types";
import AllProducts from "@widgets/AllProducts/AllProducts";
import { useAppSelector } from "@shared/hooks/reduxHooks";

const CatalogPage = () => {
  const [category, setCategory] = useState<CategorieType>("popular");
  const text = useAppSelector((state) => state.text.text);
  const object = useAppSelector((state) => state.object.object);

  useEffect(() => {
    if (text || Object.keys(object).length > 0) {
      setCategory("all");
    }
  }, [object, text]);

  return (
    <>
      <Navbar />
      <Categories category={category} setCategory={setCategory} />

      {category === "popular" && <PopularProducts />}
      {category === "all" && (
        <>
          <AllProducts />
        </>
      )}
    </>
  );
};

export default CatalogPage;
