import { useState } from 'react';
import './App.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [icon, setIcon] = useState(<FaPlay />);

  const playPause = () => {
    if (!play) {
      const intervalId = setInterval(() => {
        setTime((prev: number) => prev + 1);
      }, 1000);
      setIcon(<FaPause />);
      setPlay(intervalId);
    } else {
      clearInterval(play);
      setPlay(false);
      setIcon(<FaPlay />);
    }
  };

  const reset = () => {
    if (play) {
      clearInterval(play);
    }
    setTime(0);
    setPlay(false);
  };

  return (
    <div>
      <div className="face-input" onClick={reset}>
        {time}
      </div>

      <button className="time-input" onClick={playPause}>
        {icon}
      </button>
    </div>
  );
}
