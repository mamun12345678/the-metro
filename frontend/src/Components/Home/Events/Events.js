import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Loading";
import { API_URL } from "../../../config";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { admin } = useAuth();

  useEffect(() => {
    fetch(`${API_URL}/Events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`${API_URL}/Events/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingStudents = events.filter((re) => re._id !== id);
            setEvents(remainingStudents);
          }
        });
    }
  };

  return (
    <div
      style={{ marginLeft: "35px", marginRight: "12px", marginBottom: "100px" }}
    >
      <h3
        style={{
          color: "#002147",
          fontFamily: "monospace",
          fontWeight: "bold",
          marginTop: "30px",
        }}
      >
        All Events{" "}
        {admin && (
          <Link as={Link} to="/AddEvent">
            <button className="btn btn-success" type="">
              ADD +
            </button>
          </Link>
        )}{" "}
      </h3>
      <hr />
      <hr style={{ marginTop: "-8px" }} />
      <div className="row justify-content-between gap-4 mt-5 mx-0">
        {!loading ? (
          events.map((event) => (
            <div className="col-lg-6 row justify-content-center mb-5">
              <div className="col-lg-4">
                <img
                  style={{ height: "150px", width: "100%" }}
                  className="w-100"
                  src={event?.img}
                  alt=""
                />
              </div>
              <div className="text-lg-start col-lg-6 mt-lg-3">
                <p className="text-secondary mt-2 mt-lg-0">
                  <i className="fas fa-calendar-alt"></i> {event?.date}
                </p>
                <h6 className="my-3 fw-bold">{event?.title}</h6>
                <Link as={Link} to={`/EventDetails/${event._id}`}>
                  <button className="btn btn-outline-primary py-1 px-2">
                    + Read More
                  </button>
                </Link>
                {admin && (
                  <button
                    className="btn btn-outline-danger px-2 py-1 ms-2"
                    onClick={() => handleDelete(event._id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                )}
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

export default Events;
