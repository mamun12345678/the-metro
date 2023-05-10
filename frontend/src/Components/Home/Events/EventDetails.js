import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetails = () => {
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/Events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/Events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: '30px', paddingBottom: '50px'}} className='row mx-1 justify-content-around'>
      <div style={{ backgroundColor: 'white' }} className='row justify-content-center col-lg-9 mb-5 mx-0'>
        <div className='col-lg-5'>
          <h3 style={{fontWeight: '700'}} className='mx-1 text-lg-start mb-3'>{event?.title}</h3>
          <img className='w-100' src={event?.img} alt="" />
        </div>
        <div style={{ fontFamily: 'initial' }} className='col-lg-7'>
          <p className='text-start text-secondary mt-4'><i class="far fa-clock"></i> {event?.date}</p>
          <h4 style={{ letterSpacing: "1px" }} className='text-start mx-1 fw-lighter'>{event?.details}</h4>
        </div>
      </div>
      <div className='col-lg-3 card px-0 overflow-auto mt-4' style={{ height: '450px' }}>
        <h5 className='fw-bold card-header bg-secondary text-light mb-2'>Events</h5>
        {
          events.map((ev) => (
            <div className='text-start ms-1'>
              <Link to={`/EventDetails/${ev?._id}`} className='text-decoration-none'>
                <button onClick="window.location.reload();" style={{ fontSize: '18px', textDecoration: 'none', backgroundColor: 'white', border: 0, fontFamily: 'Alata' }} className='go text-start'>{ev?.title}</button>
              </Link>
              <p className='ms-2 text-secondary'>Published: {ev?.date}</p>
              <hr />
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default EventDetails;