import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'; // Optional for custom styles

const CardItem = ({ title, description, link, buttonLabel, mode, external }) => {
  return (
    <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center">
      <div
        className="card"
        style={{
          width: '20rem',
          height: '100%',
          backgroundColor: mode === 'dark' ? '#5F6F81' : '#eeeeef',
          borderRadius: '15px',
        }}
      >
        <div className="card-body d-flex flex-column justify-content-between">
          <h4 style={{ color: mode === 'dark' ? 'white' : 'black' }}>{title}</h4>
          <p style={{ color: mode === 'dark' ? 'white' : 'black' }}>{description}</p>
          <Link
            to={link}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : ''}
            className={`btn btn-outline-${mode === 'dark' ? 'warning' : 'primary'}`}
          >
            {buttonLabel} &raquo;
          </Link>
        </div>
      </div>
    </div>
  );
};

const Card = ({ mode }) => {
  const cardData = [
    {
      title: 'Project Ideas',
      description: 'Stuck in project ideas? Take help with some interesting ideas!',
      link: '/project',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Service Based Company SDE Sheets',
      description: 'Solve Most Asked Questions by Top Service Based Companies',
      link: '/tcsnqtprep',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Product Based Company SDE Sheets',
      description: 'Solve Most Asked Questions by Top Product Based Companies (MAANG)',
      link: '/ProductBasedPrep',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Resume / CV Building',
      description: 'Resume tips and templates that will help you get hired!',
      link: '/resume',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Competitive Programming / DSA Learning',
      description: 'Prepare Data Structure concepts and Competitive Programming for Online Assessments / Interviews',
      link: '/DsaCp',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Aptitude Preparation / Reasoning',
      description: 'Aptitude questions and answers for your placement interviews and competitive exams!',
      link: 'https://www.indiabix.com/',
      buttonLabel: 'Get Started',
      external: true,
    },
    {
      title: 'Machine Coding Round Questions (LLD)',
      description: 'Prepare System design questions that are asked from Freshers',
      link: 'https://workat.tech/machine-coding/practice',
      buttonLabel: 'Get Started',
      external: true,
    },
    {
      title: 'Top YouTube Channels',
      description: 'Learn exciting Tutorials from top Industry Experts / Youtubers',
      link: '/youtube',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Top Telegram Channels',
      description: 'Get Timely Updates for every Job opportunities and Coding contests',
      link: '/telegram',
      buttonLabel: 'Get Started',
    },
  ];

  return (
    <div className="container my-5 text-center">
      <h1 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Latest Tutorials</h1>
      <div className="row">
        {cardData.map((card, index) => (
          <CardItem key={index} {...card} mode={mode} />
        ))}
      </div>
    </div>
  );
};

export default Card;
