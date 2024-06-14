import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
  const [remainTime, setRemainTime] = useState(timer);

  // 잔여시간 - 10ms  .. clean up이 없으면 계속 -10으로 무한루프
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainTime} max={timer} />;
}
