import { useState } from 'react';
import UserInputs from './components/UsetInputs';
import Result from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInput(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <UserInputs handleInput={handleInput} input={userInput} />
      {inputIsValid && <Result input={userInput} />}
      {!inputIsValid && <p className="center">기간은 음수가 될 수 없습니다!</p>}
    </>
  );
}

export default App;
