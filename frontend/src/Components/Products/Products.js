// src/components/Products.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Products.css";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [filter, setFilter] = useState("All");

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const menus = [
    {
      title: "Bar Menu",
      items: [
        "Bar/Bar1.jpg",
        "Bar/Bar2.jpg",
        "Bar/Bar3.jpg",
        "Bar/Bar4.jpg",
        "Bar/Bar5.jpg",
      ],
    },
    {
      title: "Coffee Menu",
      items: ["Coffee/Coffee.jpg", "Coffee/Coffee2.jpg"],
    },
    {
      title: "Food Menu",
      items: ["Food/Food Menu.jpg"],
    },
  ];

  const filteredMenus =
    filter === "All" ? menus : menus.filter((menu) => menu.title === filter);

  return (
    <div className="products-container pt-2 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <label htmlFor="filter" className="filter-label">
            Filter by category:
          </label>
          <select
            id="filter"
            className="form-select"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Bar Menu">Bar Menu</option>
            <option value="Coffee Menu">Coffee Menu</option>
            <option value="Food Menu">Food Menu</option>
          </select>
        </div>
      </div>

      {filteredMenus.map((menu, menuIndex) => (
        <div key={menuIndex}>
          <div className="row justify-content-center mx-0 mt-5">
            <div className="col-lg-10">
              <h3 className="menu-title">{menu.title}</h3>
              <hr className="double-hr" />
            </div>
            {menu.items.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-3 col-sm-3 col-6 px-0"
              >
                <div
                  className="img-container p-2"
                  onClick={() => handleImageClick(item)}
                >
                  <img className="menu-img" src={item} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={selectedImage} alt="" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Products;
