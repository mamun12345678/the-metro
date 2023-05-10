import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/Orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // DELETE AN USER
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`${API_URL}/Orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h3
        style={{
          color: "#2F2865",
          fontFamily: "Alata",
          fontWeight: "bold",
          marginTop: "40px",
        }}
      >
        Manage Bookings
      </h3>
      <hr />
      <hr style={{ marginTop: "-8px" }} />
      <div
        style={{ marginBottom: "150px" }}
        className="row mt-5 gap-5 justify-content-center mx-0"
      >
        {orders.map((ord) => (
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(5, 10, 30, 0.7), rgba(5, 10, 30, 0.7)), url(pic.jpg)`,
              backgroundRepeat: "no-repeat",
              height: "40vh",
              backgroundPosition: "center",
              fontFamily: "Alata",
              backgroundSize: "cover",
              boxShadow: "3px 3px 15px gray",
              borderRadius: "10px",
            }}
            className="col-lg-3 col-11 py-2"
          >
            <h6 style={{ color: "violet" }} className="mt-4">
              <i className="far fa-user"></i> {ord.name}
            </h6>
            <h6 className="text-danger">
              <i className="far fa-envelope"></i> {ord.email}
            </h6>
            <h6 className="text-light mb-3">
              <i className="fas fa-phone"></i> {ord.phone}
            </h6>
            <h6 className="text-info mb-3">
              <i className="far fa-calendar-alt"></i> {ord.date}
            </h6>

            <h6 className="text-info">
              <i className="far fa-clock"></i> {ord.from} - {ord.to}
            </h6>
            <button
              className="btn btn-outline-light py-1 px-2 mt-2"
              onClick={() => handleDelete(ord._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
