export default function UserInputs({ handleInput, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial Investment</label>
          <input
            type="number"
            onChange={(e) => handleInput('initialInvestment', e.target.value)}
            value={input.initialInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>annual Investment</label>
          <input
            type="number"
            onChange={(e) => handleInput('annualInvestment', e.target.value)}
            value={input.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected Investment</label>
          <input
            type="number"
            onChange={(e) => handleInput('expectedReturn', e.target.value)}
            value={input.expectedReturn}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>duration</label>
          <input type="number" onChange={(e) => handleInput('duration', e.target.value)} value={input.duration}></input>
        </p>
      </div>
    </section>
  );
}
