import { useEffect, useState } from "react";
import { BASE_URL } from "../utils";
import { Box, Container, Grid, Typography, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import CartPopup from "./CartPopup";
const ProductDetail = ({
  singleProduct,
  setSideBarOpen,
  sideBarOpen,
  cart,
  setCart,
}) => {
  const { title } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const apiData = async () => {
      const apiURL = await fetch(`${BASE_URL}/products/${singleProduct}`);
      const response = await apiURL.json();
      setData(response);
      console.log(response);
    };
    apiData();
  }, [singleProduct]);
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
                variant="h6"
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {data ? (
        <Box sx={{ padding: "30px 0" }} key={data.id}>
          <Container>
            <Grid
              container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  style={{ width: "150px" }}
                />
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Typography
                  variant="h2"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  {data.title}
                </Typography>
                <Typography variant="h6" style={{ fontSize: "18px" }}>
                  {data.description}
                </Typography>
                <Typography variant="h6" style={{ fontSize: "18px" }}>
                  <strong>Category:</strong> {data.category}
                </Typography>
                <Typography variant="h6" style={{ fontSize: "18px" }}>
                  <strong>Price:</strong> {data.price}
                </Typography>
                <Box>
                  <Rating value={data.rating?.rate} readOnly />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <>
          <Box sx={{ padding: "30px 0" }}>
            <Typography variant="h6">No Data</Typography>
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

export default ProductDetail;
