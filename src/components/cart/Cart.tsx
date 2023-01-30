import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CartItem from "../cartItem/CartItem";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
      <Box sx={{ padding: "1rem", width: "50vw" }}>
        <Typography variant="subtitle1" component="h1">
          Cart
        </Typography>
        <Box>
          <CartItem />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;
