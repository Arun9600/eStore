import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
const TopArea = () => {
  const theme = useTheme();
  const topAreaAlign = useMediaQuery(theme.breakpoints.up("xs"));
  const align = topAreaAlign ? "right" : "center";
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "10px 0" }}>
        <Container maxWidth="true">
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={8}>
              <Typography
                variant="h6"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                Welcome to eStore
              </Typography>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={4}
              style={{ textAlign: `${align}` }}
            >
              <ShoppingCartCheckoutIcon style={{ color: "#fff" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopArea;
