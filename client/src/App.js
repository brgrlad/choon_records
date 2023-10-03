import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


//COMPONENTS
import Navbar from "./components/Navbar";
import ProductsNavbar from "./components/ProductsNavbar";
import Header from "./components/Header"
import Footer from "./components/Footer"
import AdminPage from "./views/AdminPage";
import Newsletter from "./components/Newsletter"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

    //VERIFY TOKEN
    useEffect(() => {
      const verify_token = async () => {
        try {
          if (!token) {
            setIsLoggedIn(false);
          } else {
            axios.defaults.headers.common["Authorization"] = token;
            const response = await axios.post(
              `http://localhost:4004/admin/loginAdmin`
            );
            console.log(response);
            return response.data.ok ? login(response.data.token) : logout();
          }
        } catch (error) {
          console.log(error);
        }
      };
      verify_token();
    }, [token]);

    const login = (token) => {
      debugger
      let decodedToken = jose.decodeJwt(token);

      let admin = {
        emailAddress: decodedToken.emailAddress,
      };
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(admin));
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

      {/* only one router can be implemented per project */}
      <Router>

        <Navbar />

        <Header />

        <ProductsNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/User/Register" element={<RegisterUser />} />
          <Route path="/User/Login" element={<UserLogin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin/loginAdmin" element={<AdminLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} login={login} />} />
          <Route path="/Contact" element={<Contact />} />

          {/* if logged in, show adminPage */}
          {/* <Route path="/admin/adminPage" element={isLoggedIn && isAdmin ?<AdminPage /> : <Navigate to='/'/>} /> */}

        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;