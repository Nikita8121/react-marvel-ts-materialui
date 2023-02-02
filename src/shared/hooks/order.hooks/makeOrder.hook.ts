import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { makeOrder } from "../../services/apiService/orderApiService/order.api.service";
import { IMakeOrder } from "../../services/apiService/orderApiService/order.api.service.types";
import useDeleteCart from "../cart.hooks/deleteCart.hook";

const useMakeOrder = () => {
  const navigate = useNavigate();
  const { deleteCart } = useDeleteCart();
  const { mutate } = useMutation({
    mutationFn: async (data: IMakeOrder) => makeOrder(data),
    onSuccess: () => {
      navigate("/");
      deleteCart();
    },
  });

  return { makeOrder: mutate };
};

export default useMakeOrder;
