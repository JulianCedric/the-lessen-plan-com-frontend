import React from 'react';
import { useTimer } from 'react-timer-hook';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  const percentage = 77;
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
          backgroundColor: "cornflowerblue",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
          })}
        />
      </div>
      <h1>React-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts back to 30-minute timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1800);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800); // Starts with timer set to 30 minutes
  return (
    <div className='main' style={{textAlign: 'center'}}>
      <h1>Deep Work Dashboard</h1>
      <p>Circular Progress Bar - UNDER CONSTRUCTION</p>
      <MyTimer expiryTimestamp={time} />
      <p> - UNDER CONSTRUCTION</p>
    </div>
  );
}