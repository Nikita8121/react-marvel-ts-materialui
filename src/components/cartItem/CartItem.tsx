import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./CartItem.scss";

const CartItem = () => {
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
        <h3>title</h3>
        <div className="information">
          <p>Price: $</p>
          <p>Total: $</p>
        </div>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          className="buttons"
        >
          <Button
            size="small"
            disableElevation
            variant="contained"
            /* onClick={() => removeFromCart(item.id)} */
          >
            -
          </Button>
          <p>amount</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            /* onClick={() => addToCart(item)} */
          >
            +
          </Button>
        </Box>
      </Box>
      <img
        className="cart-item__img"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="fav"
      />
    </Box>
  );
};

export default CartItem;
