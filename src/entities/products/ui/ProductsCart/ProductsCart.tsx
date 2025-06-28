import { IProducts, ProductCartStyle } from "@shared/types/globalTypes";
import cls from "./ProductsCart.module.scss";
interface IProductCart extends IProducts {
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsCart = ({
  name,
  price,
  sale,
  image,
  styleType,
  aviability,
  setOpenModal,
}: IProductCart) => {
  const prevPrice = price / (1 - sale / 100);
  const formattedPrice = price.toLocaleString("ru-Ru");

  return (
    <div
      className={`${cls.cart} 
        ${styleType === ProductCartStyle.All ? cls.all : ""} 
        ${styleType === ProductCartStyle.Basket ? cls.basket : ""}
        ${styleType === ProductCartStyle.Popular ? cls.popular : ""}
        ${!aviability ? cls.dis : ""}
      `}
    >
      <img
        onClick={() => setOpenModal(true)}
        className={cls["cart__image"]}
        src={image}
        alt=""
      />

      <div className={cls["cart__info"]}>
        <div className={cls["cart__price"]}>
          <h3 className={cls["cart__price-title"]}>{formattedPrice}Р</h3>
          {sale && (
            <h3 className={cls["cart__dis-av"]}> {prevPrice.toFixed(0)}</h3>
          )}
        </div>
        <p className={cls["cart__name"]}>{name}</p>{" "}
        <button disabled={!aviability} className={cls["cart__add"]}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductsCart;
