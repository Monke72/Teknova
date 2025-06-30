import { IProducts } from "@shared/types/globalTypes";
import { Modal } from "antd";
import React from "react";
import "./CartModal.scss";
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
      className="modal"
      centered
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
    >
      <div className="modal__wrapper">
        <h2 className="modal__title">{name}</h2>
        <div className="modal__main">
          <img className="modal__image" src={image} alt="" />
          <div className="modal__info">
            <div className="info__wrapper">
              <h3 className="info__title">Характеристики</h3>
              <ul className="info__list">
                <li className="info__item">
                  <div className="info__title">Производитель</div>
                  <div className="item__dots" />
                  <div className="info__category">{producer}</div>
                </li>
                <li className="info__item">
                  <div className="info__title">Цена</div>
                  <div className="item__dots" />
                  <div className="info__category">{formattedPrice(price)}P</div>
                </li>
                <li className="info__item">
                  <div className="info__title">Категория</div>
                  <div className="item__dots" />
                  <div className="info__category">{category}</div>
                </li>
                {sale && (
                  <li className="info__item">
                    <div className="info__title">Скидка</div>
                    <div className="item__dots" />
                    <div className="info__category sale">{sale}%</div>
                  </li>
                )}
              </ul>
            </div>
            <button className="modal__button">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
