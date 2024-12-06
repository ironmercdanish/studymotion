import React, { useEffect } from "react";
import "./Services.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const Services = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-2">
      {/* Cover Image */}
      <div className="cover-container my-1 p-3">
        <h2 className="text-white text-center p-5">Our Services</h2>
      </div>

      {/* About Section */}
      <div className="text-section">
        {/* <h1 className="mt-2 text-center">
          <strong>Our Services</strong>
        </h1> */}

        <div className="row mt-4">
          <div className="col-md-6">
            <p><strong>Web Development Courses:</strong> Learn HTML, CSS, JavaScript, React, and more.</p>
            <p><strong>Backend Development:</strong> Master Node.js, Python, Java, and databases.</p>
            <p><strong>Full-Stack Development:</strong> Comprehensive courses from front-end to back-end.</p>
            <p><strong>Mobile App Development:</strong> Courses on React Native, Flutter, and Swift.</p>
            <p><strong>Data Science & Machine Learning:</strong> Python, R, AI, and machine learning courses.</p>
          </div>
          <div className="col-md-6">
            <p><strong>DevOps & Cloud Computing:</strong> AWS, Azure, Docker, and Kubernetes.</p>
            <p><strong>Technical Interview Preparation:</strong> Coding challenges, algorithms, and mock interviews.</p>
            <p><strong>Freelancing & Career Guidance:</strong> Tips on building portfolios and freelancing platforms.</p>
            <p><strong>Project-Based Learning:</strong> Real-world projects to enhance your skills.</p>
            <p><strong>Community Support & Mentorship:</strong> Access to forums, peer reviews, and expert guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
