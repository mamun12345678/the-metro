import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="row justify-content-center gap-3 my-5 text-start mx-0">
        <div className="col-lg-4 about-image">
          <img src="logo(3).jpg" alt="" />
        </div>
        <div className="col-lg-7 about-text mt-3">
          <h3 className="about-title fw-bold">The Metro, Luton</h3>
          <p>
            The Metro is a 200 capacity modern venue in an ideal central
            location in Luton, that's perfect for private functions. Since
            opening in 2010, The Metro has hosted numerous birthday parties,
            christening celebrations & wedding receptions. The whole venue is
            accessible by stairs and a lift which offering excellent disabled
            access, including at the bar itself.
          </p>
        </div>
        <div className="col-lg-4 ms-2 about-info">
          <h3 className="fw-bold my-1">Venue Information</h3>
          <p>
            <li>Fully licensed bar (licensing hours: 07:00 - 04:00)</li>
            <li>Extendable stage and DJ booth</li>
            <li>In-house sound system and DJ equipment</li>
            <li>
              3 HD television monitors and projector (ideal for slide
              shows/videos)
            </li>
            <li>Kitchen facilities</li>
          </p>
        </div>
        <div className="col-lg-7 about-location">
          <h3 className="fw-bold my-1">Location</h3>
          <p>
            <span style={{ fontWeight: "700" }}>Address:</span> Campus Centre
            University Square, Luton LU1 3JU <br />
            <br />
            The Metro is located in central Luton and benefits from numerous
            transport links. Getting to us by road, rail or air couldn’t be
            easier. <br />
            <br />
            ⦁ Road: The Metro is easily accessible by road from M1 Junction 10
            and close to the A6. There is a large public car park a few hundred
            yards away which offers free parking after 6pm. <br />
            <br />⦁ Rail: Only a few minutes’ walk from Luton Station which is a
            direct route to/from London. The Metro has its own dedicated
            entrance on St Anns Road and is clearly signposted.
          </p>
          <h3 className="fw-bold">Opening Hours</h3>
          <p>
            Monday: 09:00-18:00 <br />
            Tuesday: 09:00-18:00 <br />
            Wednesday: 09:00-18:00 <br />
            Thursday: 09:00-18:00 <br />
            Friday: 09:00-18:00 <br />
            Saturday: Closed <br />
            Sunday: Closed <br />
            Short notice and seasonal changes will be published on our social
            media channels. Special events may take place outside of these
            published hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
