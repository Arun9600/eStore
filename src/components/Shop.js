import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";
import { Box, Container, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartPopup from "./CartPopup";
import { Link } from "react-router-dom";
const Shop = ({
  addToCart,
  setSideBarOpen,
  sideBarOpen,
  cart,
  setCart,
  setSingleProduct,
}) => {
  const [shopList, setShopList] = useState([]);
  useEffect(() => {
    const productListFunc = async () => {
      const productsListURL = await fetch(`${BASE_URL}/products`);
      const result = await productsListURL.json();
      setShopList(result);
    };
    productListFunc();
  }, []);

  const productView = (id) => {
    setSingleProduct(id);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#46B2E8", height: "20vh", width: "100%" }}>
        <Container maxWidth="true">
          <Grid container>
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
                variant="h2"
                style={{ color: "#fff", textAlign: "center" }}
              >
                Shop
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
                Our Products
              </Typography>
            </Grid>
            {shopList &&
              shopList.map((products) => (
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
                    <Link
                      to={`/productDetail/${products.title}`}
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      <Typography
                        variant="h2"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          marginBottom: "10px",
                        }}
                        onClick={() => productView(products.id)}
                      >
                        {products.title}
                      </Typography>
                    </Link>
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
          </Grid>
        </Container>
      </Box>
      <CartPopup
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
};

export default Shop;
