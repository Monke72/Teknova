import SearchProducts from "@features/SearchProducts/ui/SearchProducts";
import Navbar from "@widgets/Navbar/Navbar";
import PopularProducts from "./ui/PopularProducts/PopularProducts";

const CatalogPage = () => {
  return (
    <>
      <Navbar />
      <SearchProducts />
      <PopularProducts />
    </>
  );
};

export default CatalogPage;
