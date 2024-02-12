import {
  Drawer,
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
const CartPopup = ({ cart, sideBarOpen, setSideBarOpen }) => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  const sideBarWidth = isLarge ? "500px" : "320px";
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
          ""
        )}
      </Drawer>
    </>
  );
};

export default CartPopup;
