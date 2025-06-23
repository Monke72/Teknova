import { useAppSelector } from "@app/Provider";
import Navbar from "@widgets/Navbar/Navbar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
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
    </section>
  );
};

export default HomePage;
