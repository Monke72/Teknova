import { useAppSelector } from "@shared/hooks/reduxHooks";
import Banner from "@pages/HomePage/ui/Banner/Banner";
import Brands from "@pages/HomePage/ui/Brands/Brands";
import Footer from "@widgets/Footer/Footer";
import Info from "@pages/HomePage/ui/Info/Info";
import Navbar from "@widgets/Navbar/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  const products = useAppSelector((state) => state.productsList.products);
  console.log(products);

  const navigate = useNavigate();

  console.log(entry);

  useEffect(() => {
    if (!entry) {
      navigate("/reg");
    }
    if (entry) {
      navigate("/");
    }
  }, [entry, navigate]);

  return (
    <section className="home">
      <Navbar />
      <Banner />
      <Brands />
      <Info />
      <Footer />
    </section>
  );
};

export default HomePage;
