// PositionsSection.js
import React from "react";
import "./PositionsSection.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFingerprint } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { FaSitemap } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GrCloudComputer } from "react-icons/gr";
import { FaComputer, FaD } from "react-icons/fa6";
// import { SiMicrosoftsharepoint } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { TbSitemap } from "react-icons/tb";
import { TbDatabaseCog } from "react-icons/tb";

import { BsBrowserChrome } from "react-icons/bs";
import { SiBmcsoftware } from "react-icons/si";
import { FaMobileScreen } from "react-icons/fa6";

const recruiting_positions = [
  {
    title: "Cybersecurity",
    logo: <FaFingerprint />,
    path: "cyber",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Aerospace",
    logo: <IoAirplane />,
    path: "aerospace",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "System Engineering & Administration",
    logo: <TbWorldCode />,
    path: "system-engineering",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Network Design and Architecture",
    logo: <TbSitemap />,
    path: "network-design",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Program & Project Management",
    logo: <IoIosPeople />,
    path: "project-management",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Information Systems Security Officer/Engineerr",
    logo: <GrCloudComputer />,
    path: "security-officer",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Software Engineer",
    logo: <FaComputer />,
    path: "software-engineer",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  // {
  //   title: "SharePoint Developer",
  //   logo: <SiMicrosoftsharepoint />,
  //   path: "sharepoint-developer",
  //   detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  // },
  {
    title: "PeopleSoft Developer",
    logo: <FaDev />,
    path: "peoplesoft-developer",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Database Administrator",
    logo: <TbDatabaseCog />,
    path: "db-administrator",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "BigData Architect",
    logo: <FaDatabase />,
    path: "bigdata-arcitect",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "IT Specialist",
    logo: <FaSitemap />,
    path: "it-specialist",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
];

const dev_positions = [
  {
    title: "Web Applications",
    logo: <BsBrowserChrome />,
    path: "web-aplications",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Softwares",
    logo: <SiBmcsoftware />,
    path: "softwares",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
  {
    title: "Mobile Applications",
    logo: <FaMobileScreen />,
    path: "mobile-applications",
    detail: "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.",
  },
];

const PositionsSection = ({ dev }) => {
  return (
    <section className="positions-section">
      {!dev && (
        <h2 className="section-title">Positions we are Recruiting for</h2>
      )}
      {dev && <h2 className="section-title">Development for</h2>}
      <div className="positions-grid">
        {!dev &&
          recruiting_positions.map((position, index) => (
            <Link
              to={`/position/${position.path}`}
              key={index}
              state={{ title: position.title, detail: position.detail }}
              className="position-card"
            >
              <div className="logo-placeholder">{position.logo}</div>
              <p className="position-title">{position.title}</p>
            </Link>
          ))}
        {dev &&
          dev_positions.map((position, index) => (
            <Link
              to={`/position/${position.path}`}
              key={index}
              state={{ title: position.title, detail: position.detail }}
              className="position-card"
            >
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
