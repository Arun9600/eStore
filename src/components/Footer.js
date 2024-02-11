import { Box, Container, Grid, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "15px 0" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <Typography variant="p" style={{ color: "#fff" }}>
                Developed by Arun
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
