// src/pages/Home.js
import React from "react";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

import PageTitle from "../../components/Blog/Title/Title";
import BlogGrid from "../../components/Blog/Grid/Grid";

import Footer from "../../components/Footer/Footer";

const Blog = () => {
  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      <PageTitle title={'Blog Post'} text={'Blog Grid'} />
      <BlogGrid />

      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Blog;
