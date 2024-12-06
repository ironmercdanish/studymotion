import React, { useEffect } from "react";
import cover from "./images/cover.jpg";
import "./About.css"; // Make sure custom styles are applied

const About = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-4">
      {/* Cover Image */}
      <div className="cover-container my-4 p-3">
        <img
          src={cover}
          className="cover-img d-block w-100 mt-5"
          alt="About Cover"
        />
      </div>

      {/* About Section */}
      <div className="text-section">
        {/* <h1 className="mt-1 text-center">
          <strong>About Us</strong>
        </h1> */}

        <div className="content mt-4">
          <p>
            Welcome to <strong>StudyMotion</strong>—your ultimate destination for
            learning to code! Our mission is to create a dynamic and inspiring
            platform where students can achieve their goals, explore new
            opportunities, and shape a brighter future with confidence.
          </p>

          <p>
            Coding has become a cornerstone of success in today’s digital age,
            and we are dedicated to providing exceptional resources and support
            to help our community thrive.
          </p>

          <p>
            At CodeCampus, we equip students with everything they need to
            enhance their coding skills. From beginner-friendly tutorials to
            advanced tools, our constantly updated resources ensure you're
            always learning the latest technologies.
          </p>

          <p>
            We take pride in fostering a welcoming and inclusive environment. No
            matter where you are in your coding journey—starting fresh or
            looking to level up your expertise—we're here to guide you every
            step of the way.
          </p>

          <p>
            Explore our wide range of documentation, coding sheets, and hands-on
            projects designed for learners of all levels. Join us at{" "}
            <strong>CodeCampus</strong> today, and unlock the joy of coding as
            you build a brighter future!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
