import { useAppSelector } from "@shared/hooks/reduxHooks";
import Checkbox from "@shared/ui/Checkbox/Checkbox";
import "./SearchSider.scss";
import { useState } from "react";

const SearchSider = () => {
  const [showAviability, setShowAviability] = useState<boolean>(true);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showProducer, setShowProducer] = useState<boolean>(false);
  const products = useAppSelector((state) => state.productsList.products);
  const productsBrands = Array.from(new Set(products.map((el) => el.producer)));

  const maxPrice = Math.max(...products.map((product) => product.price));
  const minPrice = Math.min(...products.map((product) => product.price));
  return (
    <div className="sider">
      <ul className="sider__list">
        <li className="sider__item">
          <button
            onClick={() => setShowAviability((prev) => !prev)}
            className={`sider__button ${showAviability ? "active" : ""}`}
          >
            Наличие
          </button>
          {showAviability && (
            <div className="sider__dropdown">
              <Checkbox checked={true} label="В наличии" />
              <Checkbox label="Отсутствующие в продаже" />
            </div>
          )}
        </li>
        <li className="sider__item">
          <button
            onClick={() => setShowPrice((prev) => !prev)}
            className={`sider__button ${showPrice ? "active" : ""}`}
          >
            Цена
          </button>
          {showPrice && (
            <div className="sider__dropdown price">
              <input
                className="sider__price"
                min={minPrice}
                type="number"
                placeholder={`от ${minPrice}`}
              />
              <input
                className="sider__price"
                min={minPrice}
                max={maxPrice}
                type="number"
                placeholder={`до ${maxPrice}`}
              />
            </div>
          )}
        </li>
        <li className="sider__item">
          <button
            onClick={() => setShowProducer((prev) => !prev)}
            className={`sider__button ${showProducer ? "active" : ""}`}
          >
            Производитель
          </button>
          {showProducer && (
            <div className="sider__dropdown brandss">
              <Checkbox label="Все производители" />
              {productsBrands.map((el, i) => (
                <Checkbox key={i} label={el} />
              ))}
            </div>
          )}
        </li>
      </ul>
      <button className="sider__btn">Применить</button>
    </div>
  );
};

export default SearchSider;
