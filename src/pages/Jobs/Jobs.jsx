import React from 'react'
import Header from '../../components/Header/Header'
import PageTitle from '../../components/Blog/Title/Title'
import AgencySection from '../../components/Agency/Agency'
import Footer from '../../components/Footer/Footer'
import FAQSection from '../../components/FAQ/FAQSection'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import JobsTable from '../../components/Jobs/JobsTable'
const Jobs = () => {
  return (
    <div className="page-wrapper">
    {/* <div class="preloader"></div> */}
    <Header />
    <MobileMenu />
    <PageTitle title={"Jobs"} text={"Jobs"} />
    <JobsTable />
    

    <AgencySection />
    <Footer />

    <button class="scroll-top scroll-to-target" data-target="html">
      <span class="fa fa-arrow-up"></span>
    </button>
  </div>
  )
}

export default Jobs
