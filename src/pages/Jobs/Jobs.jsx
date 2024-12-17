import React from 'react';
import Header from '../../components/Header/Header';
import PageTitle from '../../components/Blog/Title/Title';
import AgencySection from '../../components/Agency/Agency';
import Footer from '../../components/Footer/Footer';
import FAQSection from '../../components/FAQ/FAQSection';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import JobsTable from '../../components/Jobs/JobsTable';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import { useLocation } from 'react-router-dom';

const Jobs = () => {
  const { state } = useLocation();
  const { city, search } = state || { city: '', search: '' };

  return (
    <div className="page-wrapper">
      <Header />
      <MobileMenu />
      <PageTitle title={"Jobs"} text={"Jobs"} />
      <JobsTable city={city} search={search} />
      <AgencySection />
      <NewsLetter />
      <Footer />
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Jobs;
