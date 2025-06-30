import BasketList from "@entities/basket/ui/BasketList";
import { useBasketActions } from "@features/basket/hooks/hooks";
import Navbar from "@widgets/Navbar/Navbar";

const BasketPage = () => {
  const { deleteProduct, clear } = useBasketActions();
  return (
    <>
      <Navbar />
      <BasketList deleteProduct={deleteProduct} clear={clear} />
    </>
  );
};

export default BasketPage;
