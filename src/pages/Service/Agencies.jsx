const Agencies = () => {
  return (
    <div
      className="servicebg container-fluid agencies"
      style={{
        background: "linear-gradient(to right, #a39acb, #736998, #1f1c29)",
      }}
    >
      <h3
        className="text-center pt-4 mb-4"
        style={{ color: "white", fontWeight: "bolder" }}
      >
        Agencies we've placed candidates at
      </h3>
      <div className="container pb-5 pt-2">
        <div className="row g-0" style={{ border: "1px solid #ccc" }}>
          {[
            "agen1.png",
            "agen2.png",
            "agen3.png",
            "agen4.png",
            "agen5.png",
            "agen6.png",
            "agen7.png",
            "agen8.png",
          ].map((img, index) => (
            <div
              key={index}
              className="col-md-3 d-flex align-items-center justify-content-center"
              style={{
                border: "1px solid #ccc",
                minHeight: "120px",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              <img
                src={`/assets/images/web images/Services/${img}`}
                alt={`Agency ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  padding: "15px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="servicebg-overlay"></div>
    </div>
  );
};
export default Agencies;
