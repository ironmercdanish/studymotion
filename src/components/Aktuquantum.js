import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Aktuquantum = (props) => {
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
            <strong>AKTU QUANTUM</strong>
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
                <b>First Semester</b>:{" "}
                <Link
                  className="link"
                  to="https://shorturl.at/eyrPX"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b>Second Semester</b>:{" "}
                <Link
                  className="link"
                  to="https://shorturl.at/eyrPX"
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
                <b>3rd Semester</b>:{" "}
                <Link
                  className="link"
                  to="https://shorturl.at/A0OY4"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b>4th Semester</b>:{" "}
                <Link
                  className="link"
                  to="https://shorturl.at/A0OY4"
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
                <b>5th Semester</b>:{" "}
                <Link
                  className="link"
                  to="https://shorturl.at/QU2RC"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b>6th Semester</b>:{" "}
                <Link
                  className="link"
                  to="https://shorturl.at/QU2RC"
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
                <b>7th Semester</b>:{" "}
                <Link
                  className="link"
                  to="/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Click Here
                </Link>
                <b>8th Semester</b>:{" "}
                <Link
                  className="link"
                  to="/"
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
export default Aktuquantum;
