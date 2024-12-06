import React, { useEffect } from "react";
import Card from "./Card";
import Carousel from "./Carousel";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page is scrolled to the top on mount
  }, []);

  const handleLogOut = () => {
    // Consider clearing only specific keys instead of clearing everything
    localStorage.removeItem("userToken"); // Example: clearing only user token
    window.location.reload(); // Reload the page after logout
  };

  return (
    <div>
      {/* Mode-based button color */}
      <button
        className={`mx-3 mt-5 mb-4 float-end btn btn-${
          props.mode === "dark" ? "warning" : "primary"
        }`}
      >
        {props.value} {/* Ensure that 'value' prop is passed correctly */}
      </button>

      {/* Carousel and Card Components */}
      <Carousel mode={props.mode} />
      <Card mode={props.mode} toggleMode={props.toggleMode} />

      {/* LogOut button */}
      <button
        className={`my-2 mb-5 btn btn-outline-${
          props.mode === "dark" ? "warning" : "primary"
        }`}
        onClick={handleLogOut}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Home;
