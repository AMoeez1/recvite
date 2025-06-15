const Agencies = () => {
  return (
    <div className="servicebg container-fluid agencies">
      <h1 className="text-center title pt-4 mb-4">
        Agencies we've placed candidates at
      </h1>
      <div className="container pb-5 pt-2">
        <div className="row">
          <div className="col-md-3 box">
            <img src="/assets/images/services/agen1.jpg" alt="" />
          </div>
          <div className="col-md-3 box">
            <img src="/assets/images/web images/services/agen2.jpg" alt="" />
          </div>
          <div className="col-md-3 box">
            <img src="/assets/images/web images/services/agen3.jpg" alt="" />
          </div>
          <div className="col-md-3 box" style={{ borderRight: "none" }}>
            <img src="/assets/images/web images/services/agen4.jpg" alt="" />
          </div>
          <div className="col-md-3 box" style={{ borderBottom: "none" }}>
            <img src="/assets/images/web images/services/agen5.jpg" alt="" />
          </div>
          <div className="col-md-3 box" style={{ borderBottom: "none" }}>
            <img src="/assets/images/web images/services/agen6.jpg" alt="" />
          </div>
          <div className="col-md-3 box" style={{ borderBottom: "none" }}>
            <img src="/assets/images/web images/services/agen7.jpg" alt="" />
          </div>
          <div
            className="col-md-3 box"
            style={{ borderRight: "none", borderBottom: "none" }}
          >
            <img src="/assets/images/web images/services/agen8.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="servicebg-overlay"></div>
    </div>
  );
};
export default Agencies;
