import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { API_URL } from "../../../config";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.name = user?.displayName;
    data.img = user.photoURL ? user.photoURL : " ";

    fetch(`${API_URL}/Reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Review submited");
          reset();
        }
      });
  };
  return (
    <div className="mt-5">
      <h4 className="fw-bold">Submit a Review</h4>
      <p>
        Share your thoughts with other People by submitting a review. You can
        also submit product feedback.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="w-100 form-control"
          rows="4"
          maxLength="200"
          required
          placeholder="Write something in 200 characters...."
          {...register("description")}
        />
        <br />
        <select className="w-75 form-control" {...register("rating")} required>
          <option value="">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <input
          className="btn btn-outline-primary"
          value="Submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
