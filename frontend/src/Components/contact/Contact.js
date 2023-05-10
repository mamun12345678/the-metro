import React from "react";

const Contact = () => {
  return (
    <div className="my-5">
      <section className="text-center mx-2 my-5" id="contact">
        <h3 className="fw-bolder text-primary">CONTACT</h3>
        <hr />
        <hr style={{ marginTop: "-10px" }} className="mb-5" />
        <div className="row justify-content-evenly mx-0">
          <div className="col-lg-5 text-start mt-lg-3">
            <div style={{ fontFamily: "Alata" }}>
              <p>You can get in touch with us via email, phone or post.</p>
              <p>
                <span style={{ fontWeight: "700" }}>Email:</span>{" "}
                help@bedssu.co.uk <br />
              </p>
              <p className="my-3">
                <span style={{ fontWeight: "700" }}>Phone:</span> 01582743221{" "}
                <br />
              </p>

              <p>
                {" "}
                <span style={{ fontWeight: "700" }}>Address:</span> Campus
                Centre, University Square, Luton LU1 3JU{" "}
              </p>
            </div>

            <h3 style={{ fontWeight: "600" }} className="mb-3 mt-5">
              Feedback, Ideas and Complaints
            </h3>
            <p style={{ letterSpacing: "1px" }}>
              We are always keen to receive feedback from our members. If you
              have any fresh ideas, a reason to complain about 'The Metro' or
              any feedback at all to share with us, do get in touch using the
              contact details. Any complaints we receive will be handled in
              accordance with our Complaints Procedure.
            </p>
          </div>
          <div className="col-lg-5 mb-5">
            <form action="https://formspree.io/f/mqkogvbl" method="POST">
              <div className="mb-3 text-start">
                <label className="form-label">
                  NAME <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="form-control"
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label">
                  EMAIL <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="form-control"
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label">
                  Aditional Details <span className="text-danger">*</span>
                </label>
                <textarea
                  rows="7"
                  required
                  type="text"
                  name="message"
                  className="form-control"
                ></textarea>
              </div>
              <button
                value="send"
                style={{ backgroundColor: "#5B43D6", color: "white" }}
                type="submit"
                className="btn py-2 px-4 rounded-pill"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
