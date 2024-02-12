import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
const App = () => {
  const [cart, setCart] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const addToCart = (products) => {
    setCart(products);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout
                cart={cart}
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}
              />
            }
          >
            <Route
              path=""
              index
              element={
                <Home
                  addToCart={addToCart}
                  cart={cart}
                  sideBarOpen={sideBarOpen}
                  setSideBarOpen={setSideBarOpen}
                />
              }
            />
            <Route
              path="shop"
              element={
                <Shop
                  addToCart={addToCart}
                  cart={cart}
                  sideBarOpen={sideBarOpen}
                  setSideBarOpen={setSideBarOpen}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
