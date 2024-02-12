import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const AppLayout = ({ setSideBarOpen }) => {
  return (
    <>
      <Header setSideBarOpen={setSideBarOpen} />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
