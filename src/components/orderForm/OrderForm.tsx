import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import useOrderFormComponent from "./orderForm.component.hook";
import useValidation from "./validation.hook";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const payments = ["Cash", "CreditCard"];

const OrderForm = () => {
  const { createOrder } = useOrderFormComponent();
  const validation = useValidation(createOrder);
  return (
    <>
      <Typography sx={{ marginTop: "1rem" }} variant="h6" gutterBottom>
        Order Details
      </Typography>
      <form onSubmit={validation.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={validation.values.name}
              onChange={validation.handleChange}
              error={validation.touched.name && Boolean(validation.errors.name)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="secondName"
              name="secondName"
              label="Second name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={validation.values.secondName}
              onChange={validation.handleChange}
              error={
                validation.touched.secondName &&
                Boolean(validation.errors.secondName)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={validation.values.city}
              onChange={validation.handleChange}
              error={validation.touched.city && Boolean(validation.errors.city)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="street"
              name="street"
              label="Street"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              value={validation.values.street}
              onChange={validation.handleChange}
              error={
                validation.touched.street && Boolean(validation.errors.street)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              labelId="payment"
              id="payment"
              name="payment"
              fullWidth
              value={validation.values.payment}
              onChange={validation.handleChange}
              error={
                validation.touched.payment && Boolean(validation.errors.payment)
              }
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {payments.map((payment) => (
                <MenuItem key={payment} value={payment}>
                  {payment}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Make order
        </Button>
      </form>
    </>
  );
};

export default OrderForm;
