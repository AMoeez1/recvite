import React from 'react';
import './JobDetailSection.css';
import ApplyFormModal from './JobApplyForm/ApplyFormModal';
import { useState } from 'react';
const JobDetailSection = () => {

    const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);


  return (
    <div className="job-detail-section">
      <h1 className="job-title">Market and Credit Risk Specialist</h1>

      <div className="job-info">
        <p><strong>Job Industry:</strong> Finance</p>
        <p><strong>Job Type:</strong> Full-Time</p>
        <p><strong>Job Location:</strong> Doha, Qatar</p>
        <p><strong>Grade:</strong> 6</p>
      </div>

      <div className="job-summary">
        <h2>Summary:</h2>
        <p>
          Support the development and implementation of credit and market risk management policies, procedures, and systems for the bank.
          Identify, assess, measure, and monitor market, interest rate, and liquidity risks, and handle credit risk related functions and responsibilities.
        </p>
      </div>

      <div className="job-responsibilities">
        <h2>Responsibilities:</h2>
        <ul>
          <li>Develop and implement market risk management policies, procedures, and systems.</li>
          <li>Assist in defining and updating the Market Risk Appetite by setting up KRIs, risk tolerances, limits, and targets.</li>
          <li>Monitor and analyze market risks, including interest rate risk, investment risk, and liquidity risk.</li>
          <li>Monitor the client’s investment portfolios and ensure compliance with the investment policy, Risk Appetite Statement, and regulatory requirements.</li>
          <li>Support the development and establishment of Market Risk Appetite and the regular monitoring and reporting of market risk appetite to senior management and risk committees.</li>
          <li>Prepare and present regular and ad-hoc investment portfolio analysis reports to senior management and risk committees.</li>
          <li>Evaluate fixed assets and equity investment opportunities and provide investment recommendations.</li>
          <li>Ensure implementation of middle office best practices into the client’s policies and procedures.</li>
          <li>Ensure deals are accurately recorded, processed, and executed properly.</li>
          <li>Conduct stress testing and scenario analysis whenever required to assess the impact of market risks on the client’s liquidity and financial performance.</li>
          <li>Work with other departments to ensure that market risk is effectively managed across the client.</li>
          <li>Monitor the financial market on a regular basis to identify any potential risks.</li>
          {/* Add more list items as needed */}
        </ul>
      </div>

      <div className="job-responsibilities">
        <h2>Requirements:</h2>
        <ul>
          <li>Bachelor’s degree in Finance or any relevant discipline.</li>
          <li>Minimum of 5-7 years of relevant experience in Market Risk in a bank or a consulting firm.</li>
          <li>Must have experience in Risk assessment, Risk modeling, Market risk assessment.</li>
          <li>Experienced in Liquidity risk assessment and Data analysis & reporting.</li>
          <li>Knowledge in Islamic banking and IFRS9 monitoring.</li>
          {/* Add more list items as needed */}
        </ul>
      </div>

      <button className="apply-button" onClick={handleOpenModal}>
      Apply Now
    </button>
    <ApplyFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default JobDetailSection;
