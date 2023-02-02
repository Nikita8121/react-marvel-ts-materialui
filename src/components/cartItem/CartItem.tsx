import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./CartItem.scss";
import { ICartItem } from "../../shared/services/apiService/cartApiService/cart.api.service.types";
import { IComic } from "../../shared/services/apiService/comicApiService/comic.api.service.types";

interface ICartItemProps {
  item: ICartItem;
  removeFromCart: (itemId: string) => void;
  addItemToCart: (item: IComic) => void;
}

const CartItem = ({ item, removeFromCart, addItemToCart }: ICartItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid lightblue",
        paddingBottom: "1rem",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <h3>{item.item.title}</h3>
        <div className="information">
          <p>Price: {item.price} $</p>
          <p>Total: {item.price * item.quantity} $</p>
        </div>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          className="buttons"
        >
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.comicId)}
          >
            -
          </Button>
          <p>amount: {item.quantity}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addItemToCart(item.item)}
          >
            +
          </Button>
        </Box>
      </Box>
      <img className="cart-item__img" src={item.item.thumbnail} alt="fav" />
    </Box>
  );
};

export default CartItem;
