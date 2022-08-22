const Counter = () => {
  return (
    <ul className="timer-list">
      <li className="timer-list__timer">
        <div className="timer__time">4</div>
        <h2 className="timer__text">Days</h2>
      </li>

      <li className="timer-list__timer">
        <div className="timer__time">8</div>
        <h2 className="timer__text">Hours</h2>
      </li>

      <li className="timer-list__timer">
        <div className="timer__time">53</div>
        <h2 className="timer__text">Minutes</h2>
      </li>

      <li className="timer-list__timer">
        <div className="timer__time">54</div>
        <h2 className="timer__text">Seconds</h2>
      </li>
    </ul>
  );
};

export default Counter;
