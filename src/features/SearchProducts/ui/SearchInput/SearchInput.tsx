import "./SearchInput.scss";
interface ISearchInput {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ searchValue, setSearchValue }: ISearchInput) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search container">
      <div className="input__wrapper">
        <input
          onChange={inputChange}
          type="text"
          value={searchValue}
          className="search__input"
          placeholder="Поиск"
        />
      </div>
    </div>
  );
};
export default SearchInput;
