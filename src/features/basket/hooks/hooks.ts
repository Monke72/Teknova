import { useAppDispatch } from "@shared/hooks/reduxHooks";
import {
  addToBakset,
  deleteFromBasket,
  clearBasket,
} from "../basketSlice/slice";

export const useBasketActions = () => {
  const dispatch = useAppDispatch();

  return {
    addProduct: (id: number) => dispatch(addToBakset(id)),
    deleteProduct: (id: number) => dispatch(deleteFromBasket(id)),
    clear: () => dispatch(clearBasket()),
  };
};
