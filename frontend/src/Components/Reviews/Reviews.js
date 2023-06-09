import React, { useEffect, useState } from "react";
import AddReview from "./AddReview";
import { Rating } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { API_URL } from "../../config";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { admin } = useAuth();

  useEffect(() => {
    fetch(`${API_URL}/Reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`${API_URL}/Reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingReviews = reviews.filter((re) => re._id !== id);
            setReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <>
      <div className="row justify-content-center mx-2">
        <div className="col-lg-6">
          <AddReview></AddReview>
        </div>
      </div>
      <div className="row my-5 mx-1 align-items-center justify-content-between">
        <h2 style={{ color: "#262339" }} className="fw-bold mt-5">
          Reviews
        </h2>
        <hr />
        {reviews.map((review) => (
          <div className="col-lg-6 mb-4">
            <div className="row justify align-items-center">
              <div className="col-lg-2 col-4">
                <img
                  width="70%"
                  className="rounded-circle"
                  src={review.img}
                  alt=""
                />
              </div>
              <div className="col-lg-9 col-8" style={{ textAlign: "left" }}>
                <h6 className="fw-bold mt-2">{review.name}</h6>
                <Rating size="small" value={parseInt(review.rating)} />
                <p style={{ color: "#A7A9AB" }}>
                  {review.description}{" "}
                  {admin && (
                    <button
                      className="btn btn-outline-danger ms-4 py-0 px-2"
                      onClick={() => handleDeleteUser(review._id)}
                    >
                      Delete
                    </button>
                  )}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
