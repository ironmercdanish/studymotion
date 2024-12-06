
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import login from "./images/Login/login.png";

const Login = ({ mode, toggleMode }) => {
  const [value, setValue] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signInWithPopup(auth, provider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <>
      {value ? (
        <Home mode={mode} toggleMode={toggleMode} value={value} />
      ) : (
        <div className={`login-container ${mode === "dark" ? "dark-mode" : ""}`}>
          {/* Left Section */}
          <div className="login-content">
            <br/> <br/>
<br/> <br/>    
            <h2 className="subtitle">Student Assistant</h2>
            <br/>
            <p className="description">
              A web platform focused on guiding students through coding. We offer
              an interactive space to help students reach their goals and build a
              successful future.
            </p>
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className={`btn ${mode === "dark" ? "btn-dark" : "btn-light"}`}
              >
                <FcGoogle className="icon" /> Login with Google
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="login-image">
            <img src={login} alt="Login" />
          </div>
         
        </div>
      )}
    </>
  );
};

export default Login;
