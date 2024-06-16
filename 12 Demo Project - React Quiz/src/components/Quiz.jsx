import { useState, useCallback } from 'react';
import QUESTION_DUMMY from '../questions.js';
import QuizComplete from './QuizComplete.jsx';
import Question from './Question.jsx';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [ansState, setAnsState] = useState('');

  const activeQuizIdx = ansState == '' ? userAnswer.length : userAnswer.length - 1;
  const IsQuizDone = activeQuizIdx === QUESTION_DUMMY.length;

  const handleClick = useCallback(
    function handleClick(selectedAns) {
      setAnsState('answered');
      setUserAnswer((prevAnswer) => [...prevAnswer, selectedAns]);

      setTimeout(() => {
        if (selectedAns == QUESTION_DUMMY[activeQuizIdx].answers[0]) {
          setAnsState('correct');
        } else {
          setAnsState('wrong');
        }

        setTimeout(() => {
          setAnsState('');
        }, 2000);
      }, 1000);
    },
    [activeQuizIdx]
  );

  const onTimeOut = useCallback(() => handleClick(null), [handleClick]);

  return (
    <>
      {!IsQuizDone ? (
        <div id="quiz">
          <Question
            key={activeQuizIdx}
            onTimeOut={onTimeOut}
            activeQuizIdx={activeQuizIdx}
            question={QUESTION_DUMMY[activeQuizIdx]}
            handleClick={handleClick}
            userAnswer={userAnswer}
            ansState={ansState}
          />
        </div>
      ) : (
        <QuizComplete />
      )}
    </>
  );
}
