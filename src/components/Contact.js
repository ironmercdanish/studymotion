import React, { useState, useEffect } from "react";

const Contact = (props) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "0d80674e-cede-4ba8-969d-31302ac0d051");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult(
        "Failed to send message. Please check your network and try again."
      );
    }
  };

  return (
    <div className="container my-5 pt-5">
      <div className="text-center mb-4">
        <h2
          style={{
            color: props.mode === "dark" ? "#9235e4" : "black",
            fontSize: "40px",
          }}
        >
          <strong>Contact Us</strong>
        </h2>
      </div>
      <div className="text-center mt-4 p-2">
        <p
          style={{
            color: props.mode === "dark" ? "#cf2d2d" : "#7a5754",
            fontSize: "1.3rem",
          }}
        >
          <strong>
            Have suggestions? Let us know below. <br />
            Thank you!
          </strong>
        </p>
      </div>
      <div
        className="p-4 rounded shadow"
        style={{
          backgroundColor: props.mode === "dark" ? "#818081" : "#f1f1f1",
        }}
      >
        <form onSubmit={onSubmit} className="needs-validation" noValidate>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="name" className="form-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                style={{ borderRadius: "15px" }}
                required
              />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                <strong>Email Address</strong>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                style={{ borderRadius: "15px" }}
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <strong>Message</strong>
            </label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Enter your message"
              style={{ height: "200px", borderRadius: "15px" }}
              required
            ></textarea>
            <div className="invalid-feedback">Please enter your message.</div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`btn btn-outline-${
                props.mode === "dark" ? "warning" : "primary"
              } mx-2 my-2`}
              style={{ width: "150px", borderRadius: "10px" }}
            >
              <strong>Submit</strong>
            </button>
            <button
              type="reset"
              className={`btn btn-outline-${
                props.mode === "dark" ? "warning" : "primary"
              } mx-2 my-2`}
              style={{ width: "150px", borderRadius: "10px" }}
            >
              <strong>Reset</strong>
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {result}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
