
// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Service from "./pages/Service/Service";
import StaffingSolutions from "./pages/Service/StaffingSolutions";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Error from "./pages/404/Error";
import FAQ from "./pages/FAQ/FAQ";
import Jobs from "./pages/Jobs/Jobs";
import JobDetail from "./pages/JobDetail/JobDetail";
import {Recruiting} from "./pages/Recruiting/Recruiting";
import Development from "./pages/Development/Development";
import Capabilities from "./pages/Capabilities/Capabilities";
import PositionDetail from "./pages/PositionDetail/PositionDetail";
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
        <Route path="/faq" element={<FAQ />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/development" element={<Development />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/position/:title" element={<PositionDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
