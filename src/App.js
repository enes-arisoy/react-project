import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";
const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/productCard" element={<ProductCard />} />
      </Routes>
    </Router>
  );
};

export default App;
