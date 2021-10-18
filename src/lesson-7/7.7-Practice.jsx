import React, { useState, forwardRef, useRef, useCallback } from 'react';

import './7.7-Practice.css';

const AlarmContext = React.createContext({});

// 时间组件
const Clock = () => {
  return (
    <>
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
    </>
  );
};

// 时间表单组件
const DateForm = () => {
  return (
    <>
      <input maxLength="2" />
      :
      <input maxLength="2" />
      :
      <input maxLength="2" />
    </>
  );
};

// 根组件
const Demo = () => {
  const [remote, setRemote] = useState(false);

  return (
    <AlarmContext.Provider>
      <button>恢复</button>
      <button onClick={() => setRemote(!remote)}>
        {remote ? '服务器时间' : '本地时间'}
      </button>
      <Clock />
      <div className="parent-time">{remote ? '00:00:00' : <DateForm />}</div>
    </AlarmContext.Provider>
  );
};

export default Demo;
