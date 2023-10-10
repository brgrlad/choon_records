import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";



//VIEWS
import Home from "./views/Home";
import About from "./views/About";
import RegisterUser from "./views/RegisterUser";
import UserLogin from "./views/UserLogin";
import Products from "./views/Products";
import Contact from "./views/Contact";
import AdminLogin from "./views/AdminLogin";
import ProductDetail from "./views/ProductDetail";
import Cart from "./views/Cart";
import AdminPage from "./views/AdminPage";

//COMPONENTS
import Navbar from "./components/Navbar";
import ProductsNavbar from "./components/ProductsNavbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import CheckoutProduct from "./components/CheckoutProduct";

function App() {

  //STATES
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || '');
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));


  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartLocalStorage")) || []);
  const [cartTotal, setCartTotal] = useState(0);





  //VERIFY TOKEN AND LOGIN
  useEffect(() => {

    const verify_token = async () => {
      try {
        if (!token) {
          setIsLoggedIn(false);
        } else {
            axios.defaults.headers.common["Authorization"] = token;
            const response = await axios.post(
              `http://localhost:4004/admin/verify_token`
            );
            return response.data.ok ? login(token, user) : logout;
        }
      } catch (error) {
        console.log(error);
      }
    };

    verify_token();


  }, [token]);






  // LOGIN FUNCTION
  const login = (token, user) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  //LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <div className="bodyWrapper">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />



        <Header />

        <ProductsNavbar />

        <Routes>

        <Route
            path="/"
            element={<Navigate to="/home" />}
          />




          {/* HOME */}
          <Route path="/home" element={<Home />} />

          {/* Cart */}

          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                CheckoutProduct={CheckoutProduct}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
                setCart={setCart}
              />
            }
          />

          {/* ABOUT */}
          <Route path="/About" element={<About />} />

          {/* REGISTER */}
          <Route
            path="/User/Register"
            element={!isLoggedIn ? <RegisterUser /> : <Navigate to="/home" />}
          />

          {/* PRODUCTS */}
          <Route
            path="/products"
            element={<Products setCart={setCart} cart={cart} />}
          />

          {/* SINGLE PRODUCT PAGE */}
          <Route
            path="/products/:ProductDetails"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />

          {/* USER LOGIN */}
          <Route
            path="/User/Login"
            element={
              !isLoggedIn ? (
                <UserLogin
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  login={login}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          {/* ADMIN LOGIN */}
          <Route
            path="/admin/login"
            element={
              !isLoggedIn ? (
                <AdminLogin
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  login={login}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          {/* CONTACT */}
          <Route path="/Contact" element={<Contact />} />

          {/* ADMIN PAGE */}
          <Route
            path="/admin/adminPage"
            element={
              isLoggedIn && user.isAdmin ? (
                <AdminPage />
              ) : (
                <NavLink to="/home" />
              )
            }
          />
        </Routes>

        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
