import React from 'react'
import Header from '../../components/Header/Header'
import PageTitle from '../../components/Blog/Title/Title'
import AgencySection from '../../components/Agency/Agency'
import Footer from '../../components/Footer/Footer'
import FAQSection from '../../components/FAQ/FAQSection'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import JobsTable from '../../components/Jobs/JobsTable'
import { useLocation } from 'react-router-dom'
import JobDetailSection from '../../components/JobDetail/JobDetailSection'
const JobDetail = () => {

    const location = useLocation();
  const { title, description } = location.state || { title: "No Title", description: "No Description" };

  console.log('Title:', title);
  console.log('Description:', description);


  return (
    <div className="page-wrapper">
    {/* <div class="preloader"></div> */}
    <Header />
    <MobileMenu />
    <PageTitle title={"Job Detail"} text={"Job Detail"} />
    {/* <JobsTable /> */}
    <JobDetailSection />
    

    <AgencySection />
    <Footer />

    <button class="scroll-top scroll-to-target" data-target="html">
      <span class="fa fa-arrow-up"></span>
    </button>
  </div>
  )
}

export default JobDetail
