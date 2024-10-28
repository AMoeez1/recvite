// PositionsSection.js
import React from 'react';
import './PositionsSection.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFingerprint } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { FaSitemap } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GrCloudComputer } from "react-icons/gr";
import { FaComputer, FaD } from "react-icons/fa6";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { TbSitemap } from "react-icons/tb";
import { TbDatabaseCog } from "react-icons/tb";

import { BsBrowserChrome } from "react-icons/bs";
import { SiBmcsoftware } from "react-icons/si";
import { FaMobileScreen } from "react-icons/fa6";


const recruiting_positions = [
  { title: 'Cybersecurity', logo: <FaFingerprint/> },
  { title: 'Aerospace', logo: <IoAirplane/> },
  { title: 'System Engineering & Administration', logo: <TbWorldCode/> },
  { title: 'Network Design and Architecture', logo: <TbSitemap/> },
  { title: 'Program & Project Management', logo:<IoIosPeople/> },
  { title: 'Information Systems Security Officer/Engineerr',logo:<GrCloudComputer/> },
  { title: 'Software Engineer', logo: <FaComputer/>},
  { title: 'SharePoint Developer', logo: <SiMicrosoftsharepoint/>},
  { title: 'PeopleSoft Developer',logo:<FaDev/> },
  { title: 'Database Administrator', logo: <TbDatabaseCog/>},
  { title: 'BigData Architect', logo: <FaDatabase/>},
  { title: 'IT Specialist', logo: <FaSitemap/>},
];

const dev_positions = [
  { title: 'Web Applications', logo: <BsBrowserChrome/> },
  { title: 'Softwares', logo: <SiBmcsoftware/> },
  { title: 'Mobile Applications', logo: <FaMobileScreen/> }
];





const PositionsSection = ({dev}) => {
  return (
    <section className="positions-section">
     {!dev && <h2 className="section-title">Positions we are Recruiting for</h2>}
     {dev && <h2 className="section-title">Development for</h2>}
      <div className="positions-grid">
        {!dev && recruiting_positions.map((position, index) => (
          <Link to={'/'} key={index} className="position-card">
            <div className="logo-placeholder">{position.logo}</div>
            <p className="position-title">{position.title}</p>
          </Link>
        ))}
        {dev && dev_positions.map((position, index) => (
          <Link to={'/'} key={index} className="position-card">
            <div className="logo-placeholder">{position.logo}</div>
            <p className="position-title">{position.title}</p>
          </Link>
        ))}

      </div>

      {!dev && <h2 className="section-title">Government</h2>}
      {dev && <h2 className="section-title">Commercial</h2>}

    </section>
  );
};

export default PositionsSection;
