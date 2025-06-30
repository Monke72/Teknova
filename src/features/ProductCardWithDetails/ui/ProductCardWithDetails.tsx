import ProductsCart from "@entities/products/ui/ProductsCart/ProductCart/ProductsCart";
import { useState } from "react";
import { IProducts, ProductCartStyle } from "@shared/types/globalTypes";

import "./ProductCardWithDetails.scss";
import CartModal from "@entities/products/ui/ProductsCart/CartModal/CartModal";
import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHooks";
import {
  addToBakset,
  deleteFromBasket,
} from "@features/basket/basketSlice/slice";
interface IProductCardWithDetails {
  el: IProducts;
  styleType: ProductCartStyle;
}

const ProductCardWithDetails = ({ el, styleType }: IProductCardWithDetails) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const basket = useAppSelector((state) => state.basket.basket);
  const dispatch = useAppDispatch();

  const toggleProduct = (id: number) => {
    if (basket.includes(id)) {
      dispatch(deleteFromBasket(id));
    } else {
      dispatch(addToBakset(id));
    }
  };

  return (
    <>
      <ProductsCart
        {...el}
        styleType={styleType}
        setOpenModal={setOpenModal}
        toggleProduct={toggleProduct}
      />
      <CartModal openModal={openModal} setOpenModal={setOpenModal} el={el} />
    </>
  );
};

export default ProductCardWithDetails;
