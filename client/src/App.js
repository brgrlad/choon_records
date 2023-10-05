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
import * as jose from "jose";

//VIEWS
import Home from "./views/Home";
import About from "./views/About";
import RegisterUser from "./views/RegisterUser";
import UserLogin from "./views/UserLogin";
import Products from "./views/Products";
import Contact from "./views/Contact";
import AdminLogin from "./views/AdminLogin";
import ProductDetail from "./views/ProductDetail";

//COMPONENTS
import Navbar from "./components/Navbar";
import ProductsNavbar from "./components/ProductsNavbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from "./views/AdminPage";
import Newsletter from "./components/Newsletter";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  //admin
  const [isAdmin, setIsAdmin] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

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

    // let decodedToken = jose.decodeJwt(token);

    // let admin = {
    //   emailAddress: decodedToken.emailAddress,
    //   name:  'yyyy'
    // };

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
        <Navbar isLoggedIn={isLoggedIn}/>

        <Header />

        <ProductsNavbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/User/Register"
            element={!isLoggedIn ? <RegisterUser /> : <Navigate to="/" />}
          />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:ProductDetails" element={<ProductDetail />} />



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
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/admin/login"
            element={
              !isLoggedIn  ? (
                <AdminLogin
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  login={login}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/admin/adminPage"
            element={isLoggedIn && user.isAdmin ? <AdminPage /> : <NavLink to="/" />}
          />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
