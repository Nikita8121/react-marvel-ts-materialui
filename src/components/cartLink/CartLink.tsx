import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import useCartLinkComponent from "./useCartLinkComponent";

const CartLink = () => {
  const { itemsAmount, toggleCart } = useCartLinkComponent();
  return (
    <Badge
      sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}
      badgeContent={itemsAmount.toString()}
      color="primary"
      onClick={toggleCart}
    >
      <Fab size="medium" color="secondary" aria-label="cart">
        <ShoppingCartIcon />
      </Fab>
    </Badge>
  );
};

export default CartLink;
