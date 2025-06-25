import { IProducts } from "@shared/types/globalTypes";
import "./ProductsCart.scss";

const ProductsCart = ({ name, price, sale, image }: IProducts) => {
  const prevPrice = price / (1 - sale / 100);
  const formattedPrice = price.toLocaleString("ru-Ru");

  return (
    <div className="cart">
      <img className="cart__image" src={image} alt="" />

      <div className="cart__info">
        <div className="cart__price">
          <h3 className="cart__price-title">{formattedPrice}Р</h3>
          {sale && <h3 className="cart__dis-av"> {prevPrice.toFixed(0)}</h3>}
        </div>
        <p className="cart__name">{name}</p>{" "}
        <button className="cart__add">В корзину</button>
      </div>
    </div>
  );
};

export default ProductsCart;
