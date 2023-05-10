import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    { src: "Gallery/The-Starbucks.jpg", name: "The-Starbucks" },
    { src: "Gallery/The-Bar.jpg", name: "The-Bar" },
    { src: "Gallery/Dance-Floor.jpg", name: "Dance-Floor" },
    { src: "Gallery/Sitting-Area-1.jpg", name: "Sitting-Area-1" },
    { src: "Gallery/Sitting-Area-2.jpg", name: "Sitting-Area-2" },
    { src: "Gallery/Sitting-Area-3.jpg", name: "Sitting-Area-3" },
    { src: "Gallery/Staff=(2021-22).jpg", name: "Staff=(2021-22)" },
    { src: "Gallery/Staff-(2021-22).jpg", name: "Staff-(2021-22)" },
  ];

  return (
    <div className="gallery-container pt-2 pb-5">
      <div className="row justify-content-center mx-0 mt-5">
        <div className="col-lg-10">
          <h3 className="gallery-title">Gallery</h3>
          <hr className="double-hr" />
        </div>
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 px-0">
            <div className="img-container p-2">
              <img className="gallery-img" src={image.src} alt={image.name} />
              <div className="img-label">{image.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
