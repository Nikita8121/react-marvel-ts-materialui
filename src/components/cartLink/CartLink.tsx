import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartLink = () => {
  return (
    <Fab
      sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}
      size="medium"
      color="secondary"
      aria-label="cart"
    >
      <ShoppingCartIcon />
    </Fab>
  );
};

export default CartLink;
