import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './stopwatch.css';
import {startTimer, stopTimer, resetTimer, incrementTime
  } from '../redux/Actions/stopwatchActions'; 

const Stopwatch = ({ time, isRunning, startTimer, stopTimer, resetTimer, incrementTime }) => {
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        incrementTime();
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, incrementTime]);

  const toggleRunning = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const handleReset = () => {
    resetTimer();
  };

  const formatTimeUnit = (unit) => unit.toString().padStart(2, '0');
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button onClick={toggleRunning}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  time: state.time,
  isRunning: state.isRunning,
});

const mapDispatchToProps = {
  startTimer,
  stopTimer,
  resetTimer,
  incrementTime
};

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
