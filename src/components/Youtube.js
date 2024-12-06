import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Youtube.css'; // External CSS file for better style management.

const Youtube = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  // Styles based on mode
  const listItemStyle = {
    borderRadius: '15px',
    backgroundColor: props.mode === 'dark' ? '#42424F' : '#ffffff',
    color: props.mode === 'dark' ? '#ffc007' : '#669cd9',
  };

  const headingStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <div className="container">
      <div className="my-5 pt-5 text-start">
        <h2 style={headingStyle}><b><strong>Top YouTube Channels For CS Students</strong></b></h2>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {[
              { name: "Apna College", link: "https://www.youtube.com/@ApnaCollegeOfficial" },
              { name: "Jenny's Lectures CS IT", link: "https://www.youtube.com/@JennyslecturesCSIT" },
              { name: "CodeWithHarry", link: "https://www.youtube.com/@CodeWithHarry" },
              { name: "Anuj Bhaiya", link: "https://www.youtube.com/@AnujBhaiya" },
              { name: "Love Babbar", link: "https://www.youtube.com/@LoveBabbar" },
              { name: "Gate Smashers", link: "https://www.youtube.com/@GateSmashers" },
              { name: "CodeHelp - by Babbar", link: "https://www.youtube.com/@CodeHelp" },
              { name: "Striver", link: "https://www.youtube.com/@striver_79" },
              { name: "take U forward", link: "https://www.youtube.com/@takeUforward" },
              { name: "Arsh Goyal", link: "https://www.youtube.com/@ArshGoyal" },
              { name: "Git-up with Newton", link: "https://www.youtube.com/@GitupwithNewton" },
              { name: "Aditya Verma", link: "https://www.youtube.com/@TheAdityaVerma" },
              { name: "Keerti Purswani", link: "https://www.youtube.com/@KeertiPurswani" },
              { name: "GeeksforGeeks", link: "https://www.youtube.com/@GeeksforGeeksVideos" },
              { name: "Code From Scratch - Keerti Purswani", link: "https://www.youtube.com/@codefromscratch-keertipurswani" },
              { name: "Coding Community | Newton School", link: "https://www.youtube.com/@codingcommunitynewtonschoo8582" },
              { name: "College Wallah", link: "https://www.youtube.com/@CollegeWallahbyPW" },
              { name: "JavaScript Mastery", link: "https://www.youtube.com/@javascriptmastery" },
              { name: "freeCodeCamp.org", link: "https://www.youtube.com/@freecodecamp" },
              { name: "Fraz", link: "https://www.youtube.com/@FrazMohammad/videos" },
              { name: "Nishant Chahar", link: "https://www.youtube.com/@NishantChahar11/videos" },
              { name: "Kunal Kushwaha", link: "https://www.youtube.com/@KunalKushwaha/videos" }
            ].map((channel, index) => (
              <li key={index} className="list-group-item" style={listItemStyle}>
                <Link
                  className="link"
                  to={channel.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: props.mode === 'dark' ? '#ffc007' : '#669cd9' }}
                  aria-label={`Visit ${channel.name} on YouTube`}
                >
                  {channel.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
