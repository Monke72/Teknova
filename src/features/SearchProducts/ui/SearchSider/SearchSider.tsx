import { useAppSelector } from "@shared/hooks/reduxHooks";
import Checkbox from "@shared/ui/Checkbox/Checkbox";
import "./SearchSider.scss";
import { useEffect, useRef, useState } from "react";
import { changeInput } from "@shared/utils/changeInput/changeInput";

const SearchSider = ({ filteredProducts, setFilteredProducts }) => {
  const isFirstRender = useRef(true);
  const products = useAppSelector((state) => state.productsList.products);

  const productsBrands = Array.from(new Set(products.map((el) => el.producer)));
  //show
  const [showAviability, setShowAviability] = useState<boolean>(true);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showProducer, setShowProducer] = useState<boolean>(false);
  //price
  const maxPrice = Math.max(...products.map((product) => product.price));
  const minPrice = Math.min(...products.map((product) => product.price));
  const [inputMinPrice, setInputMinPrice] = useState<number | null>(null);
  const [inputMaxPrice, setInputMaxPrice] = useState<number | null>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (inputMinPrice !== null && !isNaN(inputMinPrice)) {
      setInputMaxPrice(inputMinPrice + 1);
    } else {
      setInputMaxPrice(null); // сбрасываем, если min пустой
    }
  }, [inputMinPrice]);

  //aviab
  const [allAviability, setAllAviability] = useState<boolean>(false);
  const [aviability, setAviability] = useState<boolean>(true);
  const [notAviability, setNotAviability] = useState<boolean>(true);
  //brands
  const [selectedBrands, setSelectedBrands] = useState<Record<string, boolean>>(
    {}
  );
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }));
  };

  const searchByParametrs = () => {
    let result = [...products];

    //Фильтр по наличию
    result = result.filter((product) => {
      if (aviability && product.aviability) return true;
      if (notAviability && !product.aviability) return true;
      if (!aviability && !notAviability) return true; // если ничего не выбрано
      return false;
    });

    //Фильтр по цене
    result = result.filter((product) => {
      const min = inputMinPrice ?? minPrice; // если inputMinPrice null или undefined — берем minPrice
      const max = inputMaxPrice ?? maxPrice; // если inputMaxPrice null или undefined — берем maxPrice

      if (product.price < min) return false;
      if (product.price > max) return false;
      return true;
    });

    //Фильтр по бренду
    if (!allAviability) {
      const activeBrands = Object.entries(selectedBrands)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, isChecked]) => isChecked)
        .map(([brand]) => brand);

      if (activeBrands.length > 0) {
        result = result.filter((product) =>
          activeBrands.includes(product.producer)
        );
      }
    }

    setFilteredProducts(result);
  };
  console.log(filteredProducts);
  //очистка

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
              <Checkbox
                onChange={() => setAviability((prev) => !prev)}
                id="aviability"
                checked={aviability}
                label="В наличии"
              />
              <Checkbox
                onChange={() => setNotAviability((prev) => !prev)}
                id="not_aviability"
                checked={notAviability}
                label="Отсутствующие в продаже"
              />
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
                onChange={(e) => changeInput(e, setInputMinPrice)}
                value={inputMinPrice ?? ""}
                className="sider__price"
                min={minPrice}
                type="number"
                placeholder={`от ${minPrice}`}
              />
              <input
                onChange={(e) => changeInput(e, setInputMaxPrice)}
                value={inputMaxPrice ?? ""}
                className="sider__price"
                min={inputMinPrice ? inputMinPrice : minPrice}
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
              <Checkbox
                id="all__aviability"
                checked={allAviability}
                onChange={() => setAllAviability((prev) => !prev)}
                label="Все производители"
              />
              {productsBrands.map((brand, i) => (
                <Checkbox
                  key={i}
                  id={brand}
                  label={brand}
                  disabled={allAviability}
                  checked={allAviability ? true : !!selectedBrands[brand]}
                  onChange={() => toggleBrand(brand)}
                />
              ))}
            </div>
          )}
        </li>
      </ul>
      <button className="sider__btn clear">Очистить</button>
      <button className="sider__btn" onClick={searchByParametrs}>
        Применить
      </button>
    </div>
  );
};

export default SearchSider;
