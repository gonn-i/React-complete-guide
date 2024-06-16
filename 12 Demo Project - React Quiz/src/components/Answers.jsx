import { useRef } from 'react';

export default function Answers({ answers, handleClick, userAnswer, ansState }) {
  const shuffledAnsRef = useRef();

  function shuffle(Arr) {
    if (!shuffledAnsRef.current) {
      shuffledAnsRef.current = [...Arr]; // 정답이 항상 첫번쨰이기 떄문에, 원배열을 건들면 정답을 찾을 수 없음 => 그래서 새로운 배열에서 정렬
      shuffledAnsRef.current.sort(() => Math.random() - 0.5);
    }
    return shuffledAnsRef.current;
  }

  return (
    <ul id="answers">
      {shuffle(answers).map((ans) => {
        let cssClass = '';
        const isSelected = userAnswer[userAnswer.length - 1] === ans;

        if (isSelected && ansState == 'answered') cssClass = 'selected';
        if (isSelected && (ansState == 'wrong' || ansState == 'correct')) cssClass = ansState;
        return (
          <li key={ans} className="answer">
            <button onClick={(e) => handleClick(e.target.value)} className={cssClass} value={ans}>
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
