import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import useGetCart from "../../shared/hooks/cart.hooks/getCart.hook";
import useAddItem from "../../shared/hooks/cart.hooks/addItem.hook";
import useRemoveItem from "../../shared/hooks/cart.hooks/removeItem.hook";

const Cart = () => {
  const { isCartOpen, toggleCart, cart } = useGetCart();
  const { addItem } = useAddItem();
  const { removeItem } = useRemoveItem();
  return (
    <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
      <Box sx={{ padding: "1rem", width: "50vw" }}>
        <Typography variant="subtitle1" component="h1">
          Cart
        </Typography>
        <Box>
          {cart.items.map((item) => (
            <CartItem
              key={item.comicId}
              item={item}
              addItemToCart={addItem}
              removeFromCart={removeItem}
            />
          ))}
        </Box>
        <Typography
          sx={{ marginTop: "1rem" }}
          variant="subtitle2"
          component="h1"
        >
          Total: {cart.totalPrice} $
        </Typography>
        <Button
          component={NavLink}
          onClick={toggleCart}
          to="/order"
          variant="contained"
        >
          Make Order
        </Button>
      </Box>
    </Drawer>
  );
};

export default Cart;
