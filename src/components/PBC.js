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

const PBC = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const links = [
    { to: "https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/#Arrays", text: "Love Babbar's SDE Sheet" },
    { to: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/", text: "Most famous Striver's SDE Sheet" },
    { to: "https://leetcode.com/problem-list/top-interview-questions/", text: "Top Interview Questions on Leetcode" },
    { to: "https://leetcode.com/problem-list/top-100-liked-questions/", text: "Top 100 Questions on Leetcode" },
    { to: "http://surl.li/fprxi", text: "GFG SDE Sheet" },
    { to: "https://www.geeksforgeeks.org/facebookmeta-sde-sheet-interview-questions-and-answers/", text: "Facebook(Meta) SDE Sheet: Interview Questions and Answers" },
    { to: "https://www.geeksforgeeks.org/amazon-sde-sheet-interview-questions-and-answers/", text: "Amazon SDE Sheet: Interview Questions and Answers" },
    { to: "https://www.geeksforgeeks.org/apple-sde-sheet-interview-questions-and-answers/", text: "Apple SDE Sheet: Interview Questions and Answers" },
    { to: "https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/", text: "Netflix SDE Sheet: Interview Questions and Answers" },
    { to: "https://www.geeksforgeeks.org/google-sde-sheet-interview-questions-and-answers/", text: "Google SDE Sheet: Interview Questions and Answers" }
  ];

  return (
    <div className='container'>
      <div className='container my-5 pt-5 text-start'>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <b>All Important Sheets for Cracking Any Product-Based Companies</b>
        </h2>
        <br />
        <ul className="list-group">
          {links.map((link, index) => (
            <ListItem key={index} to={link.to} text={link.text} mode={props.mode} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PBC;
