import RegistrPage from "@pages/RegistrPage/RegistrPage";
import "./styles/index.scss";
import HomePage from "@pages/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "@shared/ui/NotFound/NotFound";
import CatalogPage from "@pages/CatalogPage/CatalogPage";
import BasketPage from "@pages/BasketPage/BasketPage";
import AboutPage from "@pages/AboutPage/AboutPage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHooks";
import { NavSectionType, setSection } from "@features/Navigation";
import { loadProducts } from "@entities/products/model/productsSlice";

const pathToSectionMap: Record<string, NavSectionType> = {
  "/": "main",
  "/catalog": "catalog",
  "/basket": "basket",
  "/about": "about",
};

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const section = useAppSelector((state) => state.navSection.section);
  const entry = useAppSelector((state) => state.userReg.entry);

  useEffect(() => {
    const currentSection =
      pathToSectionMap[location.pathname as keyof typeof pathToSectionMap];

    if (currentSection && currentSection !== section) {
      dispatch(setSection(currentSection));
    }
  }, [location.pathname, dispatch, section]);
  useEffect(() => {
    if (!entry) return;
    dispatch(loadProducts());
  }, [dispatch, entry]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reg" element={<RegistrPage />} />
        <Route path="*" element={<NotFound error={404} />} />
      </Routes>
    </>
  );
}

export default App;
