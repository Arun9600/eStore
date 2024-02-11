import { Box, Container, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TopArea from "./TopArea";
const Header = () => {
  const navigate = useNavigate();
  const homeNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <TopArea />
      <Box>
        <Container maxWidth="true">
          <Grid container style={{ alignItems: "center" }}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Typography
                variant="h1"
                onClick={() => homeNavigate()}
                style={{ cursor: "pointer" }}
              >
                eStore
              </Typography>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8} className="main-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
