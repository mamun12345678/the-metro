import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
      axios.post("http://localhost:5000/Events", data).then((res) => {
        if (res.data.insertedId) {
          alert("Event Added SuccessFully");
          reset();
        }
      });
    };

    return (
        <div className="my-5 mx-1">
        <h3 style={{ color: "#262339"  }} className="fw-bold">
            Add a Event
        </h3>
        <hr />
        <div className="col-lg-12" style={{ paddingBottom: '100px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row text-start justify-content-center">
                    <div className="col-lg-5">
                        <label className="form-label">Image URL *</label>
                        <input
                            required
                            className="mb-4 form-control"
                            {...register("img")}
                            placeholder="Image URL (500px X 500px)"
                        />
                    </div>
                    <div className="col-lg-5">
                        <label className="form-label">Title</label>
                        <input
                            required
                            type="text"
                            className="mb-4 form-control"
                            {...register("title")}
                            placeholder="Title"
                        />
                    </div>
                    <div className="col-lg-5">
                        <label className="form-label">Choose Date *</label>
                        <input
                            required
                            type="date"
                            className="mb-4 form-control"
                            {...register("date")}
                        />
                    </div>
                    <div className="col-lg-5">
                        <label className="form-label">Details *</label>
                        <textarea
                            required
                            type="text" rows="4"
                            className="mb-4 form-control"
                            placeholder="Details"
                            {...register("details")}
                        />
                    </div>
                </div>
                <input
                    className="btn btn-outline-success"
                    value="Submit"
                    type="submit"
                />
            </form>
        </div>
    </div>
    );
};

export default AddEvent;