import Answers from './Answers';
import QuizTimer from './QuizTimer';

const TIME = 15000;

export default function Question({ onTimeOut, question, handleClick, userAnswer, ansState }) {
  return (
    <div id="question">
      <QuizTimer TIME={TIME} onTimeOut={onTimeOut} />
      <h2>{question.text}</h2>
      <Answers answers={question.answers} handleClick={handleClick} userAnswer={userAnswer} ansState={ansState} />
    </div>
  );
}
