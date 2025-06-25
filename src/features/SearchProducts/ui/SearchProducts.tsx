import "./SearchProducts.scss";
const SearchProducts = () => {
  return (
    <div className="search container">
      <div className="input__wrapper">
        <input type="text" className="search__input" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default SearchProducts;
