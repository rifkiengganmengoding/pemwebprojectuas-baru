import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Ecommerce from '../pages/Ecommerce';
import Contact from '../pages/Contact';
import ProductService from '../pages/ProductService';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/ecommerce" element={<Ecommerce />} />
    <Route path="/product-service" element={<ProductService />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRouter;
