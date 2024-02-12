import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
const App = () => {
  const [cart, setCart] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const addToCart = (products) => {
    const cartCondition = cart.find((item) => item.id === products.id);
    if (cartCondition) {
      const updatedCart = cart.map((items) =>
        items.id === products.id
          ? { ...items, quantity: items.quantity + 1 }
          : items
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
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
                setCart={setCart}
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
                  setCart={setCart}
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
                  setCart={setCart}
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
