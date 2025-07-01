import { useAppSelector } from "@shared/hooks/reduxHooks";
import { formattedPrice } from "@shared/utils/formattedPrice/formattedPrice";
import deleteIcon from "@shared/assets/Delete.svg";
import basketClearIcon from "@shared/assets/Wastebasket.svg";
import { useNavigate } from "react-router-dom";
import cls from "./BasketList.module.scss";

const BasketList = ({ clear, deleteProduct }) => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.productsList.products);
  const basket = useAppSelector((state) => state.basket.basket);
  const productsInBasket = products.filter((el) => basket.includes(el.id));
  const allPrice = productsInBasket.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className={cls.basket}>
      <h1 className={cls.basket__title}>Корзина</h1>
      <div className={cls.basket__wrapper}>
        {!productsInBasket.length ? (
          <div className={cls.basket__clear}>
            <h2 className={cls["basket__clear-title"]}>
              Ваша корзина пуста 🙄
            </h2>
            <button
              className={cls["basket__clear-btn"]}
              onClick={() => navigate("/catalog")}
            >
              Нажмите здесь, чтобы продолжить покупки
            </button>
          </div>
        ) : (
          <div className={cls.basket__items}>
            <div className={cls.basket__table}>
              <div className={cls.products__basket}>
                <div className={cls.products__text}>Товары в корзине</div>
                <button className={cls.products__clear} onClick={() => clear()}>
                  Очистить <img src={basketClearIcon} alt="" />
                </button>
              </div>
              <div className={cls.products__wrapper}>
                <ul className={cls.products__list}>
                  {productsInBasket.map((product) => (
                    <li key={product.id} className={cls.product__item}>
                      <div className={cls.product__info}>
                        <img
                          className={cls.product__image}
                          src={product.image}
                          alt={product.name}
                        />
                        <h4 className={cls.product__name}>{product.name}</h4>
                      </div>
                      <div className={cls.product__more}>
                        <div className={cls.product__price}>
                          {formattedPrice(product.price)}P
                        </div>
                        <button
                          className={cls.product__delete}
                          onClick={() => deleteProduct(product.id)}
                        >
                          <img
                            className={cls.product__delete_image}
                            src={deleteIcon}
                            alt=""
                          />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={cls.basket__check}>
              <div className={cls.check__top}>
                <div className={cls.check__all}>Итого:</div>
                <h2 className={cls.check__price}>{formattedPrice(allPrice)}</h2>
              </div>
              <div className={cls.check__btm}>
                <button className={cls.check__buy}>Перейти к оформлению</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BasketList;
