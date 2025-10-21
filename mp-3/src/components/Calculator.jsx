import useCalculator from '../hooks/useCalculator';

export default function Calculator() {
  const {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    add,
    subtract,
    multiply,
    divide,
    power,
    clear
  } = useCalculator();

  const isNegative = typeof result === 'number' && result < 0;

  return (
    <div id="calc-shell">
      <h3>Calculator</h3>
      <div className="row input-row">
        <input
          type="number"
          id="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
        />
        <input
          type="number"
          id="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
        />
      </div>
      <div className="row button-row">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>×</button>
        <button onClick={divide}>÷</button>
        <button onClick={power}>^</button>
      </div>
      <h4 id="result" className={isNegative ? 'neg' : ''}>
        {result}
      </h4>
      <button className="clear-btn" onClick={clear}>Clear</button>
    </div>
  );
}
