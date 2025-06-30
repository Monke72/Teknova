import { useAppSelector } from "@shared/hooks/reduxHooks";
import cls from "./SearchInput.module.scss";
import { useEffect } from "react";
interface ISearchInput {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ searchValue, setSearchValue }: ISearchInput) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const text = useAppSelector((state) => state.text.text);
  useEffect(() => {}, [text]);

  return (
    <div className={`${cls.search} container`}>
      <div className={cls["input__wrapper"]}>
        <input
          onChange={inputChange}
          type="text"
          value={searchValue}
          className={cls["search__input"]}
          placeholder="Поиск"
        />
      </div>
    </div>
  );
};
export default SearchInput;
