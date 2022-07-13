import React from "react";
import headphone from "../../assets/headphones_c_1.webp";
const Poster = () => {
  return (
    <div
      className="position-relative text-white bg-danger lh-1 w-100 rounded-3"
      style={{
        padding: "80px 40px",
        height: "400px",
        marginTop: "80px",
        marginBottom: "50px",
      }}
    >
      <div className="d-flex justify-content-between">
        <div>
          <p style={{ margin: "15px" }}>20% OFF</p>
          <h3
            style={{ marginLeft: "25px", fontWeight: "900", fontSize: "60px" }}
          >
            FINE
          </h3>
          <h3
            style={{ marginLeft: "25px", fontWeight: "900", fontSize: "60px" }}
          >
            SMILE
          </h3>
          <p style={{ margin: "15px" }}>15 Nov to 7 dec</p>
        </div>
        <div className="lh-1">
          <p style={{ margin: "15px" }}>Beats Solo Air</p>
          <h3 style={{ fontWeight: "900", fontSize: "50px" }}>Summer Sale</h3>
          <button className="btn btn-light text-danger mt-3">Shop Now</button>
        </div>
      </div>
      <img
        src={headphone}
        alt=""
        className="position-absolute"
        style={{ top: "-25%", left: "25%" }}
      />
    </div>
  );
};

export default Poster;

{
  /* <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div> */
}
