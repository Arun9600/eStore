import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import CartPopup from "./CartPopup";
const Home = ({ addToCart, sideBarOpen, setSideBarOpen, cart }) => {
  const [topProducts, setTopProducts] = useState([]);
  const navigate = useNavigate();
  const viewAllProducts = () => {
    navigate("/shop");
  };
  useEffect(() => {
    const topProductsFunc = async () => {
      const topProductsAPI = await fetch(`${BASE_URL}/products?limit=6`);
      try {
        const result = await topProductsAPI.json();
        setTopProducts(result);
        console.log(setTopProducts);
      } catch (error) {
        console.log(error);
      }
    };
    topProductsFunc();
  });

  return (
    <>
      <Box sx={{ backgroundColor: "#46B2E8", height: "50vh", width: "100%" }}>
        <Container maxWidth="true">
          <Grid container>
            <Grid
              item
              xl={12}
              style={{
                display: "flex",
                height: "50vh",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h1"
                style={{ color: "#fff", textAlign: "center" }}
              >
                Welcome to eStore
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ padding: "30px 0" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              xs={12}
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <Typography
                variant="h2"
                style={{ fontSize: "30px", fontWeight: "bold" }}
              >
                Our Top Products
              </Typography>
            </Grid>
            {topProducts &&
              topProducts.map((products) => (
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  key={products.id}
                  style={{ marginBottom: "40px" }}
                >
                  <Box style={{ width: "350px" }}>
                    <img
                      src={products.image}
                      alt={products.title}
                      style={{
                        width: "350px",
                        objectFit: "cover",
                        height: "250px",
                        display: "block",
                        margin: "0 auto",
                        paddingBottom: "15px",
                      }}
                    />
                    <Typography
                      variant="h2"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      {products.title}
                    </Typography>
                    <Grid
                      container
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Typography
                          variant="h6"
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          Rs.{products.price}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ textAlign: "right" }}
                      >
                        <AddShoppingCartIcon
                          onClick={() => {
                            addToCart(products);
                            setSideBarOpen(true);
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              ))}
            <Grid item xl={12} md={12} xs={12} style={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                color="success"
                onClick={() => viewAllProducts()}
              >
                View All Products
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <CartPopup
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        cart={cart}
      />
    </>
  );
};

export default Home;
