import React from 'react';
import './5.7-Practice.css';

const Clock = () => {
  return (
    <div className="clock">
      <div className="background">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="point"></div>
      <div className="hour"></div>
      <div className="minute"></div>
      <div className="second"></div>
      <div className="time"></div>
    </div>
  );
};

const Demo = () => {
  return <Clock />;
};

export default Demo;
