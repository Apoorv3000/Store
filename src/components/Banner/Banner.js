import React from "react";
import logo from "../../assets/headphones_a_4.webp";
const Banner = () => {
  return (
    <div
      className="my-5 rounded-4 position-relative"
      style={{
        height: "540px",
        backgroundColor: "#dcdcdc",
        padding: "100px 40px",
      }}
    >
      <div>
        <p className="fs-5" style={{ marginBottom: "-7px" }}>
          Beats solo
        </p>
        <h3
          className=" fw-bold text-dark"
          style={{ fontSize: "4rem", marginBottom: "-7px" }}
        >
          Wireless
        </h3>
        <h1
          className="text-white  fw-bolder  text-uppercase"
          style={{ fontSize: "8em", marginLeft: "-10px" }}
        >
          Headphones
        </h1>
        <img
          src={logo}
          alt="headphone"
          className="position-absolute top-0"
          style={{ right: "8%" }}
          width={450}
          height={450}
        />
      </div>
      <button className="btn btn-danger fw-bold fs-4 mt-3">
        Get the headphones
      </button>
    </div>
  );
};

export default Banner;
