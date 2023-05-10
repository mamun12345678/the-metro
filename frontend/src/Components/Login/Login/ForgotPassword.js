import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import useAuth from "./../../../hooks/useAuth";
import "./ForgotPassword.css"; // import CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { sendResetPasswordEmail } = useAuth();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendResetPasswordEmail(email);
    console.log("success:", success);
    if (success) {
      setSuccessMessage("Failed to send reset email.");
    } else {
      setErrorMessage("Reset email has been sent!");
    }
  };

  return (
    <Container className="forgot-password-container">
      <Typography variant="h5" className="forgot-password-title">
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
          className="forgot-password-input"
        />
        <Button
          sx={{ width: "75%", m: 1 }}
          type="submit"
          variant="contained"
          className="forgot-password-button"
        >
          Send Reset Email
        </Button>
      </form>
      {successMessage && (
        <Typography
          variant="body1"
          gutterBottom
          color="success"
          className="forgot-password-message"
        >
          {successMessage}
        </Typography>
      )}
      {errorMessage && (
        <Typography
          variant="body1"
          gutterBottom
          color="error"
          className="forgot-password-message"
        >
          {errorMessage}
        </Typography>
      )}
    </Container>
  );
};

export default ForgotPassword;
