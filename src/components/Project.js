import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ to, text, mode }) => (
  <li className="list-group-item" style={{
    borderRadius: '15px',
    backgroundColor: mode === 'dark' ? '#42424F' : 'white',
  }}>
    <Link 
      className="link" 
      to={to} 
      target='_blank' 
      rel="noreferrer" 
      style={{ color: mode === 'dark' ? '#ffc007' : '#669cd9' }}
    >
      {text}
    </Link>
  </li>
);

const Project = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fullStackProjects = [
    { to: "https://lnkd.in/dxcZTAsn", text: "AMAZON Clone" },
    { to: "https://lnkd.in/d4gubPzw", text: "Netflix Clone" },
    { to: "https://lnkd.in/dN7CKY6P", text: "Whether Search" },
    { to: "https://lnkd.in/dRP3gxGY", text: "Real-Time Chat App" },
    {
      to: 'https://lnkd.in/dYfYNhxe', text: 'Ecommerce Website - Part 1',
      additionalLinks: [
        { to: 'https://lnkd.in/dFvjc3_t', text: 'Part 2' },
        { to: 'https://lnkd.in/d9SgXd_n', text: 'Part 3' },
      ]
    },
    { to: 'https://lnkd.in/dA7bbVnh', text: "Portfolio Website" },
    { to: 'https://lnkd.in/d6G4aMSX', text: "Cryptocurrency Tracker" },
    { to: 'https://workat.tech/project-ideas', text: "Project Ideas for Software Developers" }
  ];

  const androidProjects = [
    { to: "https://lnkd.in/dHgZmYgQ", text: "Sticky Notes App" },
    { to: "https://lnkd.in/dADxVHqB", text: "Face Filters App" },
    { to: "https://lnkd.in/dJR4ArJa", text: "Facial Emotion Detection" },
    { to: "https://lnkd.in/dREy-Mke", text: "Paint Application" },
    { to: "https://lnkd.in/d9FrvcsB", text: "Bitcoin Tracker" },
    { to: "https://lnkd.in/d8WFzs3d", text: "Xylophone Application" }
  ];

  return (
    <div className="container">
      <div className="container mt-5 pt-5">
        <h2 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <b><strong>All Important YouTube Links for Project Ideas</strong></b>
        </h2>
      </div>

      {/* Full-Stack Projects */}
      <div className="container">
        <h3 className={`mt-5 pb-3 ${props.mode === 'dark' ? 'text-light' : 'text-muted'}`}>
          <strong>Full-Stack Development Project Ideas With YouTube Resource</strong>
        </h3>
        <ul className="list-group list-group-flush">
          {fullStackProjects.map((project, index) => (
            <ListItem key={index} to={project.to} text={project.text} mode={props.mode} />
          ))}
        </ul>
      </div>

      {/* Android Projects */}
      <div className="container mb-5">
        <h3 className={`mt-5 pb-3 ${props.mode === 'dark' ? 'text-light' : 'text-muted'}`}>
          <strong>Best Android Projects</strong>
        </h3>
        <ul className="list-group list-group-flush">
          {androidProjects.map((project, index) => (
            <ListItem key={index} to={project.to} text={project.text} mode={props.mode} />
          ))}
        </ul>
      </div>

      {/* More Project Ideas Link */}
      <div className="container mb-5">
        <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          For More Such Project Ideas And Guides on Multiple Domains
        </h3>
        <Link className={`btn btn-outline-${props.mode === 'dark' ? 'warning' : 'primary'} my-3`} 
              to='https://projectlearn.io/' 
              target='_blank' 
              rel="noreferrer">
          Explore More &raquo;
        </Link>
      </div>
    </div>
  );
}

export default Project;
