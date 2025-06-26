// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SearchProducts from "@features/SearchProducts/ui/SearchInput/SearchInput";
import Navbar from "@widgets/Navbar/Navbar";
import PopularProducts from "./ui/PopularProducts/PopularProducts";
import Categories from "./ui/Categories/Categories";
import { useState } from "react";
import { CategorieType } from "./types/types";
import AllProducts from "@widgets/AllProducts/AllProducts";

const CatalogPage = () => {
  const [category, setCategory] = useState<CategorieType>("popular");
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
