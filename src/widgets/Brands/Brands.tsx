import { useAppSelector } from "@app/Provider";
import "./Brands.scss";

const Brands = () => {
  const products = useAppSelector((state) => state.productsList.products);
  const productsBrands = Array.from(new Set(products.map((el) => el.producer)));
  return (
    <section className="brands container">
      <div className="scroll-wrapper">
        <ul className="scroll-track">
          {[...productsBrands, ...productsBrands].map((item, i) => (
            <li className="scroll-item" key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;
