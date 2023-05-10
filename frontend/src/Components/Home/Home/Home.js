import React from "react";
import Banner from "../Banner/Banner";
import Loading from "../../Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../../config";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    axios.post(`${API_URL}/Orders`, data).then((res) => {
      if (res.data.insertedId) {
        alert("Booked SuccessFully");
      } else {
        alert("Already Booked in that Time");
      }
    });
    reset();
  };

  useEffect(() => {
    fetch(`${API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/Events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#D1D5DB" }}>
      <Banner></Banner>

      {/* Recent Events*/}

      <h2
        style={{
          color: "#2F2C41",
          fontFamily: "Alata",
          fontWeight: "bold",
          marginTop: "30px",
        }}
      >
        Recent Events
      </h2>
      <div className="row justify-content-center gap-4 mt-lg-4 mx-1 mb-5">
        {!loading ? (
          events.slice(Math.max(events.length - 3, 0)).map((event) => (
            <div
              key={event._id}
              className="col-lg-3 col-md-5 rounded"
              style={{
                boxShadow: "3px 3px 10px gray",
                backgroundColor: "white",
              }}
            >
              <img
                style={{ height: "250px", width: "100%", paddingTop: "10px" }}
                src={event?.img}
                alt=""
              />
              <div>
                <p className="text-secondary mt-1">
                  {" "}
                  <i className="far fa-clock"></i> {event?.date}
                </p>
                <p
                  style={{
                    fontFamily: "Alata",
                    fontSize: "22px",
                    marginTop: "-10px",
                  }}
                  className="mb-2 fw-bold"
                >
                  {event?.title}
                </p>
                <Link as={Link} to={`/EventDetails/${event?._id}`}>
                  <button
                    style={{ borderRadius: "25px" }}
                    type=""
                    className="btn btn-outline-primary mb-3 w-50"
                  >
                    + Read More
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>

      {/* Booking Section Start*/}

      <div className="row text-center align-items-center justify-content-center gap-5 py-5 mx-1 ">
        <h3 className="fw-bolder">Book the Venue</h3>
        <div className="col-lg-5">
          <h4
            style={{
              color: "#2F2C41",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            <i className="fas fa-map-marker-alt"></i> The Metro Bar
          </h4>
          <img
            style={{ borderRadius: "10px" }}
            width="100%"
            src="pic.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <form
            className="row justify-content-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              required
              className="form-control mb-3"
            />
            <input
              type="email"
              required
              placeholder="Email"
              {...register("email")}
              className="form-control mb-3"
            />
            <input
              type="date"
              required
              {...register("date")}
              className="form-control mb-3"
            />
            <div className="d-flex mb-3">
              <label className="mt-2 mx-2">From</label>
              <input
                className="form-control"
                type="time"
                {...register("from")}
              />

              <label className="mt-2 mx-2">To</label>
              <input className="form-control" type="time" {...register("to")} />
            </div>
            <input
              required
              type="number"
              placeholder="Phone Number"
              {...register("phone")}
              className="form-control mb-3"
            />
            <input value="Book" type="submit" className="btn btn-dark mb-3" />
          </form>
        </div>
      </div>

      {/* Recent Reviews Section Start */}

      <div
        style={{ padding: "100px 0px" }}
        className="row justify-content-between mx-0"
      >
        <h2
          style={{ color: "#2F2C41", fontFamily: "Alata" }}
          className="fw-bold mb-5"
        >
          Recent Reviews
        </h2>
        {!loading ? (
          reviews.slice(Math.max(reviews.length - 4, 0)).map((review) => (
            <div className="col-lg-6 mb-4" key={review._id}>
              <div className="row align-items-center">
                <div className="col-lg-2 col-4">
                  <img
                    width="75%"
                    className="rounded-circle"
                    src={review?.img}
                    alt=""
                  />
                </div>
                <div className="col-lg-9 col-8" style={{ textAlign: "left" }}>
                  <h6 className="fw-bold mt-2">{review?.name}</h6>
                  <Rating size="small" value={parseInt(review?.rating)} />
                  <p style={{ fontFamily: "serif" }}>{review?.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default Home;
