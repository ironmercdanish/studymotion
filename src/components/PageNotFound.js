import React from "react";
import PageNotFounds from "./images/error404.png";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div className="container d-flex flex-column align-items-center mt-5 p-3">
      <h2
        className={`text-center mt-5 ${
          props.mode === "dark" ? "text-white" : "text-dark"
        }`}
        style={{ fontWeight: "bolder", fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
      >
        404: The Page You Are Looking For Isn't Here
      </h2>
      <p
        className={`text-center ${
          props.mode === "dark" ? "text-white" : "text-dark"
        }`}
        style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
      >
        <strong>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </strong>
      </p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <img
            className="img-fluid mt-2"
            src={PageNotFounds}
            alt="Page Not Found"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <Link
        className="btn btn-outline-light mx-2 my-3 cursor-pointer"
        to={"/"}
        style={{
          backgroundColor: "#8430D3",
          color: "white",
          fontSize: "1.1rem",
          padding: "10px 20px",
        }}
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
