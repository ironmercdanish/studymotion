import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const VirtualLab = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid my-5">
        <div
          className="container my-5 p-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1 className="mt-5">
            <strong>Laboratory Tutorials</strong>
          </h1>
        </div>
        <div className="container">
          <div className="my-3 text-start">
            <h2 style={{ color: props.mode === "dark" ? "white" : "#cf2d2d" }}>
              First Year
            </h2>
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <b>Programming for Problem Solving Lab</b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b>Basic Electrical Engineering Lab</b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b> Basic Electronics Engineering Lab</b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>{" "}
                <b>Engineering Physics Lab</b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b> Engineering Chemistry Lab</b> :{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b>English Language Lab</b> :{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b> Engineering Graphics & Design Lab</b> :{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b> Workshop Practice Lab</b> :{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
              </li>
            </ul>
          </div>
          <br />
          <div className="my-3 text-start">
            <h2 style={{ color: props.mode === "dark" ? "white" : "#cf2d2d" }}>
              Second Year
            </h2>
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <b>For COA Lab</b>:{" "}
                <b> Data Structure Lab </b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PLeV1aO80bdi7Zuce2uudw4327dQ71VTXw"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b> Data Structure Lab </b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PLeV1aO80bdi7Zuce2uudw4327dQ71VTXw"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link> <b> Data Structure Lab </b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PLeV1aO80bdi7Zuce2uudw4327dQ71VTXw"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link> <b> Data Structure Lab </b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PLeV1aO80bdi7Zuce2uudw4327dQ71VTXw"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link> <b> Data Structure Lab </b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PLeV1aO80bdi7Zuce2uudw4327dQ71VTXw"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
              </li>
              {/* Repeat for other items */}
            </ul>
          </div>
          <br />
          <div className="my-3 text-start">
            <h2 style={{ color: props.mode === "dark" ? "white" : "#cf2d2d" }}>
              Third Year
            </h2>
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <b>For CD Lab</b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PLSQzU2GdS6gfdaDjSC_Ol0s5Kj-P1mWZi"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
              </li>
              {/* Repeat for other items */}
            </ul>
          </div>
          <br />
          <div className="my-3 text-start">
            <h2 style={{ color: props.mode === "dark" ? "white" : "#cf2d2d" }}>
              Fourth Year
            </h2>
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <b>For ARTIFICIAL INTELLIGENCE Lab</b>:{" "}
                <Link
                  className="link"
                  to="https://youtube.com/playlist?list=PLSQzU2GdS6gfdaDjSC_Ol0s5Kj-P1mWZi"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
              </li>
              {/* Repeat for other items */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default VirtualLab;
