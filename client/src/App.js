import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/admin/loginAdmin" element={<AdminLogin />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/admin/adminPage" element={<AdminPage />} />

        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;