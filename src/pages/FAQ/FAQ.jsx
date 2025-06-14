import React from 'react'
import Header from '../../components/Header/Header'
import PageTitle from '../../components/Blog/Title/Title'
import AgencySection from '../../components/Agency/Agency'
import Footer from '../../components/Footer/Footer'
import FAQSection from '../../components/FAQ/FAQSection'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
const FAQ = () => {
  return (
    <div className="page-wrapper">
    {/* <div class="preloader"></div> */}
    <Header />
    <MobileMenu />
    <PageTitle title={"FAQ"} text={"FAQ"}/>
    <FAQSection image={'url("/assets/images/web images/faq.jpg")'}/>
    <AgencySection />
    <Footer />

    <button class="scroll-top scroll-to-target" data-target="html">
      <span class="fa fa-arrow-up"></span>
    </button>
  </div>
  )
}

export default FAQ
