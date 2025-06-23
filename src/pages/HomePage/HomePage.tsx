import { useAppDispatch, useAppSelector } from "@app/Provider";
import { loadProducts } from "@entities/products/model/productsSlice";
import Navbar from "@widgets/Navbar/Navbar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  const products = useAppSelector((state) => state.productsList.products);
  console.log(products);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log(entry);

  useEffect(() => {
    if (!entry) {
      navigate("/reg");
    }
    if (entry) {
      navigate("/");
    }
  }, [entry, navigate]);
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  return (
    <section className="home">
      <Navbar />
    </section>
  );
};

export default HomePage;
