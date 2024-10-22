// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Service from "./pages/Service/Service";
import StaffingSolutions from "./pages/Service/StaffingSolutions";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Error from "./pages/404/Error";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/staffing-solutions" element={<StaffingSolutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
