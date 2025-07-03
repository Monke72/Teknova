import cls from "./SearchInput.module.scss";
interface ISearchInput {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setOpenSider?: React.Dispatch<React.SetStateAction<boolean>>;
  openSider?: boolean;
  isMobile?: boolean;
}
import filterIcon from "@shared/assets/Filter.svg";

const SearchInput = ({
  searchValue,
  setSearchValue,
  setOpenSider,
  openSider,
  isMobile,
}: ISearchInput) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`${cls.search} container`}>
      <div className={cls["input__wrapper"]}>
        {isMobile && (
          <button
            className={`${cls.search__filter} ${openSider ? cls.active : ""}`}
            onClick={() => setOpenSider((prev) => !prev)}
          >
            <img src={filterIcon} alt="filter" />
          </button>
        )}
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
