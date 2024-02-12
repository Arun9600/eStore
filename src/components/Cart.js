import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CartPopup from "./CartPopup";
import { useNavigate } from "react-router-dom";
const Cart = ({ cart, setCart, setSideBarOpen, sideBarOpen }) => {
  const navigate = useNavigate();
  const toShop = () => {
    navigate("/shop");
  };
  const increaseQty = (product) => {
    const increase = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(increase);
  };
  const decreaseQty = (product) => {
    const decrease = cart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decrease);
  };
  const subTotal =
    cart && cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <Box sx={{ backgroundColor: "#46B2E8", height: "20vh", width: "100%" }}>
        <Container maxWidth="true">
          <Grid>
            <Grid
              item
              xl={12}
              style={{
                display: "flex",
                height: "20vh",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h1"
                style={{ color: "#fff", textAlign: "center" }}
              >
                Cart
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ padding: "30px 0" }}>
        {cart && cart.length === 0 ? (
          <>
            <Box>
              <Container>
                <Grid>
                  <Grid container>
                    <Grid item xl={12} lg={12} style={{ textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        style={{ fontSize: "30px", fontWeight: "bold" }}
                      >
                        No Items in your cart
                      </Typography>
                      <Box sx={{ marginTop: "50px" }}>
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={() => toShop()}
                        >
                          Shop Now
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </>
        ) : (
          <>
            <Box>
              <Container>
                <Grid container>
                  <Grid item md={12}>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Product Image</TableCell>
                            <TableCell>Product Title</TableCell>
                            <TableCell>Qunatity</TableCell>
                            <TableCell>Price</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {cart &&
                            cart.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: "80px" }}
                                  />
                                </TableCell>
                                <TableCell>
                                  <Typography variant="h5">
                                    {item.title}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography variant="h6">
                                    {item.quantity}
                                    <Box>
                                      <span>
                                        <AddIcon
                                          onClick={() => increaseQty(item)}
                                        />
                                        <RemoveIcon
                                          onClick={() => decreaseQty(item)}
                                        />
                                      </span>
                                    </Box>
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  {item.quantity * item.price}
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </>
        )}
      </Box>
      {cart && cart.length === 0 ? (
        ""
      ) : (
        <>
          <Box sx={{ textAlign: "right" }}>
            <Container>
              <Grid container>
                <Grid item md={12}>
                  <Typography variant="h5">
                    SubTotal: Rs.{Math.round(subTotal)}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
      )}
      <CartPopup
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
};

export default Cart;
