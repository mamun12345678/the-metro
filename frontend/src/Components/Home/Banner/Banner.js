import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div
        className="d-flex align-items-center mt-0"
        style={{
          backgroundColor: "#222B4D",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
        }}
      >
        <div className="row justify-content-center mx-0">
          <div className="col-lg-7 col-11">
            <p className="title text-light fw-bolder">Welcome to The Metro</p>
            <p style={{ fontFamily: "Alata" }} className="text-light mb-4">
              By day, The Metro proudly serves Starbucks Coffee along with a
              range of other beverages, sandwiches, paninis and snacks. It’s a
              great space for socialising with friends, catching up on some
              coursework or taking a well-deserved lunch break.
              <br />
              By night the venue becomes the place to be, with events such as
              pub quizzes and various themed club nights. Evening food includes
              delicious freshly made pizzas and pasta dishes.
            </p>
          </div>
          <div className="col-lg-4 col-11">
            <img className="w-100" src="logo(3).jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
