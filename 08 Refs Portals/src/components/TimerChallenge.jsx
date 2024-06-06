import { useState, useRef } from 'react';
import ResultModal from './Result.jsx';

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeReamining] = useState(targetTime * 1000);

  const timerRef = useRef();
  const dialogRef = useRef();

  // 남은 시간이 over 되지 않고, 버튼이 눌려 타켓시간보다 남은 시간이 더 작은 (버튼이 눌린 경우)
  const timerIsAcitve = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  // 버튼을 누르지 못해 진 경우,
  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogRef.current.showModal();
  }

  function handleReset() {
    setTimeReamining(targetTime * 1000);
  }

  function handleClick() {
    timerRef.current = setInterval(() => {
      setTimeReamining((prevTimeRemain) => prevTimeRemain - 10);
    }, 10);
  }

  // 시간 안에 버튼을 누른 경우
  function handleStop() {
    dialogRef.current.showModal();
    clearInterval(timerRef.current);
  }
  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
        score={score}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsAcitve ? handleStop : handleClick}>
            {timerIsAcitve ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsAcitve ? 'active' : undefined}>
          {timerIsAcitve ? 'Time is running ..' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
