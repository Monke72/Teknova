import { IProducts } from "@shared/types/globalTypes";
import { Modal } from "antd";
import React from "react";
import cls from "./CartModal.module.scss";
import { formattedPrice } from "@shared/utils/formattedPrice/formattedPrice";

interface ICartModal {
  el: IProducts;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal = ({ el, openModal, setOpenModal }: ICartModal) => {
  const { name, image, producer, price, category, sale } = el;

  return (
    <Modal
      className={cls.modal}
      centered
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
    >
      <div className={cls["modal__wrapper"]}>
        <h2 className={cls["modal__title"]}>{name}</h2>
        <div className={cls["modal__main"]}>
          <img className={cls["modal__image"]} src={image} alt="" />
          <div className={cls["modal__info"]}>
            <div className={cls["info__wrapper"]}>
              <h3 className={cls["info__title"]}>Характеристики</h3>
              <ul className={cls["info__list"]}>
                <li className={cls["info__item"]}>
                  <div className={cls["info__title"]}>Производитель</div>
                  <div className={cls["item__dots"]} />
                  <div className={cls["info__category"]}>{producer}</div>
                </li>
                <li className={cls["info__item"]}>
                  <div className={cls["info__title"]}>Цена</div>
                  <div className={cls["item__dots"]} />
                  <div className={cls["info__category"]}>
                    {formattedPrice(price)}P
                  </div>
                </li>
                <li className={cls["info__item"]}>
                  <div className={cls["info__title"]}>Категория</div>
                  <div className={cls["item__dots"]} />
                  <div className={cls["info__category"]}>{category}</div>
                </li>
                {sale && (
                  <li className={cls["info__item"]}>
                    <div className={cls["info__title"]}>Скидка</div>
                    <div className={cls["item__dots"]} />
                    <div className={`${cls["info__category"]} ${cls["sale"]}`}>
                      {sale}%
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <button className={cls["modal__button"]}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
