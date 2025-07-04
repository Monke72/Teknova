import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHooks";
import Checkbox from "@shared/ui/Checkbox/Checkbox";
import cls from "./SearchSider.module.scss";
import { useEffect, useState } from "react";
import { changeInput } from "@shared/utils/changeInput/changeInput";
import { IProducts } from "@shared/types/globalTypes";
import useDebounce from "@shared/hooks/useDebounce";
import { clearObject } from "@shared/store/slices/objectSlice";

interface ISider {
  searchValue: string;
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  className: string;
  openSider?: boolean;
}

const SearchSider = ({
  searchValue,
  setFilteredProducts,
  openSider,
  className,
}: ISider) => {
  const dispatch = useAppDispatch();
  // Дебаунсим searchValue с задержкой 300мс
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const products = useAppSelector((state) => state.productsList.products);
  const productsBrands = Array.from(new Set(products.map((el) => el.producer)));

  // Показывать/скрывать фильтры
  const [showAviability, setShowAviability] = useState<boolean>(true);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showProducer, setShowProducer] = useState<boolean>(false);

  // Диапазон цены
  const maxPrice = Math.max(...products.map((product) => product.price));
  const minPrice = Math.min(...products.map((product) => product.price));
  const [inputMinPrice, setInputMinPrice] = useState<number | null>(null);
  const [inputMaxPrice, setInputMaxPrice] = useState<number | null>(null);
  const debouncedMinPrice = useDebounce(inputMinPrice, 500);
  const debouncedMaxPrice = useDebounce(inputMaxPrice, 500);

  // Фильтр по наличию
  const [allAviability, setAllAviability] = useState<boolean>(false);
  const [aviability, setAviability] = useState<boolean>(true);
  const [notAviability, setNotAviability] = useState<boolean>(true);

  // Выбор брендов
  const [selectedBrands, setSelectedBrands] = useState<Record<string, boolean>>(
    {},
  );
  const object = useAppSelector((state) => state.object.object);

  useEffect(() => {
    if (Object.keys(object).length > 0) {
      setSelectedBrands(object);
      dispatch(clearObject());
    }
  }, [dispatch, object]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }));
  };

  // Функция фильтрации по параметрам
  const searchByParametrs = (
    search: string,
    minPriceFilter: number | null = null,
    maxPriceFilter: number | null = null,
  ) => {
    let result = [...products];

    if (search.trim() !== "") {
      const lowerSearch = search.toLowerCase();
      result = result.filter((product) =>
        product.name.toLowerCase().includes(lowerSearch),
      );
    }

    result = result.filter((product) => {
      if (aviability && product.aviability) return true;
      if (notAviability && !product.aviability) return true;
      if (!aviability && !notAviability) return true;
      return false;
    });

    const min = minPriceFilter ?? minPrice;
    const max = maxPriceFilter ?? maxPrice;

    result = result.filter(
      (product) => product.price >= min && product.price <= max,
    );

    if (!allAviability) {
      const activeBrands = Object.entries(selectedBrands)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, isChecked]) => isChecked)
        .map(([brand]) => brand);

      if (activeBrands.length > 0) {
        result = result.filter((product) =>
          activeBrands.includes(product.producer),
        );
      }
    }

    setFilteredProducts(result);
  };

  // Автоматический запуск фильтра при изменении параметров
  useEffect(() => {
    searchByParametrs(
      debouncedSearchValue,
      debouncedMinPrice,
      debouncedMaxPrice,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    debouncedSearchValue,
    aviability,
    notAviability,
    allAviability,
    selectedBrands,
    debouncedMinPrice,
    debouncedMaxPrice,
    products,
  ]);

  // Очистка фильтров
  const clearFilters = () => {
    setInputMinPrice(null);
    setInputMaxPrice(null);
    setAviability(true);
    setNotAviability(true);
    setAllAviability(false);
    setSelectedBrands({});
  };

  return (
    <div
      className={`${cls.sider} ${cls[className]} ${
        openSider ? cls.open : cls.close
      }`}
    >
      <ul className={cls.sider__list}>
        <li className={cls.sider__item}>
          <button
            onClick={() => setShowAviability((prev) => !prev)}
            className={`${cls["sider__button"]} ${
              showAviability ? cls["active"] : ""
            }`}
          >
            Наличие
          </button>
          {showAviability && (
            <div className={cls.sider__dropdown}>
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

        <li className={cls.sider__item}>
          <button
            onClick={() => setShowPrice((prev) => !prev)}
            className={`${cls["sider__button"]} ${
              showPrice ? cls["active"] : ""
            }`}
          >
            Цена
          </button>
          {showPrice && (
            <div className={`${cls["sider__dropdown"]} ${cls["price"]}`}>
              <input
                onChange={(e) => changeInput(e, setInputMinPrice)}
                value={inputMinPrice ?? ""}
                className={cls.sider__price}
                min={minPrice}
                type="number"
                placeholder={`от ${minPrice}`}
              />
              <input
                onChange={(e) => changeInput(e, setInputMaxPrice)}
                value={inputMaxPrice ?? ""}
                className={cls.sider__price}
                min={inputMinPrice ?? minPrice}
                max={maxPrice}
                type="number"
                placeholder={`до ${maxPrice}`}
              />
            </div>
          )}
        </li>

        <li className={cls.sider__item}>
          <button
            onClick={() => setShowProducer((prev) => !prev)}
            className={`${cls["sider__button"]} ${
              showProducer ? cls["active"] : ""
            }`}
          >
            Производитель
          </button>
          {showProducer && (
            <div className={`${cls["sider__dropdown"]} ${cls["brandss"]}`}>
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

      <button
        className={`${cls["sider__btn"]} ${cls["clear"]}`}
        onClick={clearFilters}
      >
        Очистить
      </button>
    </div>
  );
};

export default SearchSider;
