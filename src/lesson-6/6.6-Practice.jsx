import React from 'react';
import './6.6-Practice.css';

const AlarmContext = React.createContext({});

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
    </div>
  );
};

const Demo = () => {
  return (
    <AlarmContext.Provider>
      <button>暂停</button>
      <Clock />
      <div className="parent-time">00:00:00</div>
    </AlarmContext.Provider>
  );
};

export default Demo;
