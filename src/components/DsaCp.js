import React, { useEffect } from "react";

import { Link } from "react-router-dom";

const DsaCp = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
   
      <p
        className={`h5 mt-6 pt-3 ${
          props.mode === "dark" ? "text-light" : "text-muted"
        }`}
      >
        <b style={{ color: props.mode === "dark" ? "#ffc007" : "#cf2d2d" }}>
          Important Note:
        </b>{" "}
        <br/>
        <br/>
        <br/>
        <br/>
        All of the below links contain Easy to Advanced Problems. We recommend
        solving easy questions first before jumping to medium and hard problems.
      </p>
      <div className="container text-start my-5">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <b>Topic-Wise DSA Problems</b>
        </h2>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://leetcode.com/tag/array/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Arrays
                </Link>
              </li>
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://leetcode.com/tag/string/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  String
                </Link>
              </li>
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://leetcode.com/tag/hash-table/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Hash Table
                </Link>
              </li>
              {/* Add other links similarly */}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://leetcode.com/tag/sorting/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Sorting
                </Link>
              </li>
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://leetcode.com/tag/two-pointers/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Two Pointers
                </Link>
              </li>
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://leetcode.com/tag/recursion/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Recursion
                </Link>
              </li>
              {/* Add other links similarly */}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-3 mb-5 text-start">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <b>DSA and CP Sheets</b>
        </h2>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  Strivers A to Z Course / Sheet
                </Link>
              </li>
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://docs.google.com/spreadsheets/d/1SBx6ifpBn3TVCQWSzK9ka26glyNTyS-fqn6bfOVaXFE/edit#gid=0"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  75 Days Challenge Sheet
                </Link>
              </li>
              {/* Add other links similarly */}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://cses.fi/problemset/list"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  CSES ProblemSet
                </Link>
              </li>
              <li
                className="list-group-item"
                style={{
                  borderRadius: "15px",
                  backgroundColor: props.mode === "dark" ? "#42424F" : "white",
                }}
              >
                <Link
                  className="link"
                  to="https://docs.google.com/spreadsheets/u/0/d/1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE/htmlview"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: props.mode === "dark" ? "#ffc007" : "#669cd9",
                  }}
                >
                  DSA Sheet by Arsh Goyal (45 days Plan)
                </Link>
              </li>
              {/* Add other links similarly */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DsaCp;
