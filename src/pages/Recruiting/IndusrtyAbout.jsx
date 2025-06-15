import { BiSolidQuoteAltRight } from "react-icons/bi";
export const IndustryAbout = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container">
        <div className="row mx-0 pt-8 pb-5">
          <div className="col-md-6 py-5">
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <h4
                style={{
                  color: "purple",
                  fontWeight: 'bolder',
                  fontSize: '25px'
                }}
              >
                ___
              </h4>
              <h4 className="subtitleindustry subtitle" style={{margin: 0, fontSize: '20px'}}> Know Who We Are</h4>
            </div>

            <h3 className="mt-2 mb-2 industryabout">About our company</h3>
            <span className="industryaboutpara">
              We are a Recruiting and Web Development company. Our founders have
              extensive experience in industries like Recruiting and Staffing,
              Web Design and Development, Graphic Designing, Sales and
              Marketing. We work with a problem solving mindset for our
              customers and have a goal to deliver good quality work at a fair
              price. We’re customer focused, customer obsessed and work as your
              partner to achieve a common goal.
            </span>
            <img src="/images/quote.JPG" />
            <span className="mx-3 mb-0 industryaboutpara">
              Its an approach that we provide the best Recruitment on hard to
              fill positions and the best Web Development to Our Customers.
            </span><br />
            <span
              className="mx-5"
              style={{ color: "#8678B8", fontSize: "12px", fontWeight: "700" }}
            >
              – CEO @ Hi5-Consulting
            </span>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundImage:
                'url("/assets/images/web images/hand-shake.jpg")',
              objectFit: "cover",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};
