import Button from "@restart/ui/esm/Button";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./nav.css";
const ResponsiveNav = () => {
  const { logout, user, admin } = useAuth();

  return (
    <div style={{ backgroundColor: "#171C2F" }}>
      <Navbar style={{ padding: "5px" }} collapseOnSelect expand="lg">
        <Navbar.Brand
          style={{ fontFamily: "cursive" }}
          className="fw-bolder p-0"
        >
          <img
            style={{ width: "120px", height: "50px" }}
            src="/logo.png"
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end me-2">
          <Nav.Link className="link" as={Link} to="/Home">
            Home
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Events">
            Events
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Reviews">
            Reviews
          </Nav.Link>
          {admin && (
            <Nav.Link className="link" as={Link} to="/ManageOrders">
              Orders
            </Nav.Link>
          )}
          <Nav.Link className="link" as={Link} to="/Products">
            Products
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Gallery">
            Gallery
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Contact">
            Contact
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/About">
            About
          </Nav.Link>

          {user?.email ? (
            <>
              <Button
                className="btn ms-2 mb-1 rounded-0"
                style={{
                  backgroundColor: "#DC3545",
                  color: "white",
                  padding: "6px 10px",
                }}
                onClick={logout}
                variant="light"
              >
                Logout
              </Button>{" "}
              <br />
              <span
                style={{
                  color: "#DC3545",
                  marginLeft: "8px",
                  fontWeight: "bolder",
                }}
              ></span>
            </>
          ) : (
            <Nav.Link
              as={Link}
              to="/Login"
              className="link ms-lg-2 rounded-0"
              style={{ backgroundColor: "#404DB6", color: "white" }}
              variant="light"
            >
              Log in
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ResponsiveNav;
