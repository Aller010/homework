import React, { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    return timeInSeconds.toFixed(2);
  };

  return (
    <div>
      <p>Time: {formatTime(time)} s</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={isRunning ? pauseTimer : startTimer}>
        {isRunning ? 'Pause' : 'Continue'}
      </button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;