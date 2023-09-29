import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//VIEWS
import AdminLogin from "./views/AdminLogin";
import Products from "./views/Products";
import Home from "./views/Home";

//COMPONENTS
import Navbar from "./components/Navbar";

function App() {
  return (
    <>


      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;