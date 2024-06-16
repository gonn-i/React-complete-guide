import DONE_IMG from '../assets/quiz-complete.png';

export default function QuizComplete() {
  return (
    <div id="summary">
      <h2>퀴즈 끝!</h2>
      <img src={DONE_IMG} alt="complete 이미지" />
    </div>
  );
}
