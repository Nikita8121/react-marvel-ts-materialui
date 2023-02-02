import { useSnackbar } from "notistack";
import { IMakeOrder } from "../../shared/services/apiService/orderApiService/order.api.service.types";
import useGetCart from "../../shared/hooks/cart.hooks/getCart.hook";
import useMakeOrder from "../../shared/hooks/order.hooks/makeOrder.hook";

const useOrderFormComponent = () => {
  const { cart } = useGetCart();
  const { enqueueSnackbar } = useSnackbar();
  const { makeOrder } = useMakeOrder();
  const createOrder = (
    data: Omit<IMakeOrder, "userId" | "totalPrice" | "items">,
  ): void => {
    const items = cart.items.map((item) => {
      return {
        comicId: item.comicId,
        quantity: item.quantity,
        price: item.price,
      };
    });
    const order = { ...data, items, totalPrice: cart.totalPrice };
    makeOrder(order as unknown as IMakeOrder);
    enqueueSnackbar("Order Made", {
      variant: "success",
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
    });
  };

  return { createOrder };
};

export default useOrderFormComponent;
