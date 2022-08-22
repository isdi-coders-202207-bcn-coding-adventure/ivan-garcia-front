import CounterStyled from "./CounterStyled";

const Counter = () => {
  return (
    <CounterStyled>
      <ul className="timer-list">
        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">02</div>
          </div>

          <div className="text-container">
            <span className="timer__text">days</span>
          </div>
        </li>

        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">20</div>
          </div>

          <div className="text-container">
            <span className="timer__text">hours</span>
          </div>
        </li>

        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">34</div>
          </div>

          <div className="text-container">
            <span className="timer__text">minutes</span>
          </div>
        </li>

        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">09</div>
          </div>

          <div className="text-container">
            <span className="timer__text">seconds</span>
          </div>
        </li>
      </ul>
    </CounterStyled>
  );
};

export default Counter;
