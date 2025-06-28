import ProductsCart from "@entities/products/ui/ProductsCart/ProductsCart";
import { useState } from "react";
import { IProducts, ProductCartStyle } from "@shared/types/globalTypes";
import { Modal } from "antd";
import "./ProductCardWithDetails.scss";
interface IProductCardWithDetails {
  el: IProducts;
  styleType: ProductCartStyle;
}

const ProductCardWithDetails = ({ el, styleType }: IProductCardWithDetails) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { name, image, producer, price, category, sale } = el;

  const formattedPrice = price.toLocaleString("ru-Ru");
  return (
    <>
      <ProductsCart {...el} styleType={styleType} setOpenModal={setOpenModal} />
      <Modal
        className="modal"
        centered
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
      >
        <h2 className="modal__title">{name}</h2>
        <div className="modal__wrapper">
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
                  <div className="info__category">{formattedPrice}P</div>
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
      </Modal>
    </>
  );
};

export default ProductCardWithDetails;
