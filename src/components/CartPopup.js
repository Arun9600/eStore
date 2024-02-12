import {
  Drawer,
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
const CartPopup = ({ cart, sideBarOpen, setSideBarOpen, setCart }) => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  const sideBarWidth = isLarge ? "500px" : "320px";
  const subTotal =
    cart && cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const Delete = (products) => {
    const deleteExp = cart && cart.filter((item) => item !== products);
    setCart(deleteExp);
  };
  const increaseQty = (products) => {
    const increase = cart.map((item) =>
      item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(increase);
  };

  const Decrease = (products) => {
    const decrease = cart.map((item) =>
      item.id === products.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decrease);
  };

  return (
    <>
      <Drawer
        open={sideBarOpen}
        anchor="right"
        onClose={() => setSideBarOpen(false)}
        PaperProps={{ sx: { width: `${sideBarWidth}` } }}
      >
        {cart && cart.length === 0 ? (
          <Box>
            <Typography
              variant="h6"
              style={{ fontSize: "18px", fontWeight: "bold", padding: "30px" }}
            >
              No Products in your cart
            </Typography>
          </Box>
        ) : (
          cart &&
          cart.map((item) => (
            <Box key={item.id} style={{ padding: "20px 15px" }}>
              <Container>
                <Grid
                  container
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100px" }}
                    />
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Typography
                      variant="h4"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Price: {item.quantity} x {item.price} = Rs.
                      {item.quantity * item.price}
                    </Typography>
                    <span>
                      <AddIcon onClick={() => increaseQty(item)} />
                      <RemoveIcon onClick={() => Decrease(item)} />
                    </span>
                  </Grid>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                    <DeleteIcon onClick={() => Delete(item)} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          ))
        )}

        {cart && cart.length === 0 ? (
          ""
        ) : (
          <>
            <Box
              sx={{
                padding: "20px 15px",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  padding: "20px 15px",
                }}
              >
                Subtotal: {subTotal}
              </Typography>
            </Box>
          </>
        )}

        {cart && cart.length === 0 ? (
          ""
        ) : (
          <>
            <Box style={{ padding: "20px 15px", textAlign: "center" }}>
              <Container>
                <Grid container>
                  <Grid item xl={6} lg={6} md={6}>
                    <Button variant="outlined" color="success">
                      View Cart
                    </Button>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6}>
                    <Button variant="outlined" color="success">
                      Checkout
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </>
        )}
      </Drawer>
    </>
  );
};

export default CartPopup;
