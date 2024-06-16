import { useState, useEffect } from 'react';

export default function QuizTimer({ TIME, onTimeOut }) {
  const [timerRemain, setTimeRemain] = useState(TIME);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, TIME);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, TIME]);

  useEffect(() => {
    const remain = setInterval(() => {
      setTimeRemain((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(remain);
    };
  }, [onTimeOut, TIME]);

  return <progress id="question-time" max={TIME} value={timerRemain} />;
}
