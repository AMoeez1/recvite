import React from "react";
import { Link } from "react-router-dom";
const Cta = () => {
  return (
    <section class="cta-section bg-color-2">
      <div class="auto-container">
        <div class="inner-box clearfix">
          <div class="text pull-left">
            <h2>Hire Your Next Candidate On Recvite</h2>
          </div>
          <div class="btn-box pull-right">
            <Link to="/" class="theme-btn-one">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
