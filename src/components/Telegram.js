import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Telegram.css"; // Import CSS for styling

const Telegram = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${props.mode === "dark" ? "dark-mode" : ""}`}>
      <div className="content">
        <h2 className="header">
          <strong>Top Telegram Channels For Job Updates</strong>
        </h2>
        <ul className="list-group">
          {[
            { name: "Arsh Goyal", link: "https://t.me/goyalarsh" },
            {
              name: "Offcampus Phodenge",
              link: "https://t.me/offcampus_phodenge",
            },
            { name: "Intern Freak", link: "https://t.me/internfreak" },
            {
              name: "GeeksforGeeks",
              link: "https://t.me/geeksforgeeks_official",
            },
            {
              name: "Tech with Mukul Code",
              link: "https://t.me/techwithmukulcode",
            },
            {
              name: "Tech Program Mind",
              link: "https://t.me/TechProgramMind_official",
            },
            { name: "Codeforces", link: "https://t.me/codeforces_official" },
            { name: "Premium CSE", link: "https://t.me/premiumCSE" },
            {
              name: "Competitive Programming TUF",
              link: "https://t.me/Competitive_Programming_tuf",
            },
            {
              name: "Training Internship",
              link: "https://t.me/training_internship",
            },
            { name: "Jobxx", link: "https://t.me/jobxx" },
            { name: "Career Page 90", link: "https://t.me/career_page_90" },
            { name: "Anuj Bhaiya", link: "https://t.me/realanujbhaiya" },
            {
              name: "Job Opportunities",
              link: "https://t.me/jobopportunities2",
            },
            {
              name: "Competitive Programming Solution",
              link: "https://t.me/competitiveprogrammingsolution",
            },
            { name: "Tnp Officer", link: "https://t.me/tnpofficer" },
          ].map((channel, index) => (
            <li key={index} className="list-group-item">
              <Link to={channel.link} target="_blank" rel="noreferrer">
                {channel.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Telegram;
