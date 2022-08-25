import { useCalculateTime } from "../../hooks/useCalculateTime";
import deadline from "../../utils/deadLine";
import CounterStyled from "./CounterStyled";

export const Counter = () => {
  const { days, hours, minutes, seconds } = useCalculateTime(deadline);

  return (
    <CounterStyled>
      <ul className="timer-list">
        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">{days}</div>
          </div>

          <div className="text-container">
            <span className="timer__text">days</span>
          </div>
        </li>

        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">{hours}</div>
          </div>

          <div className="text-container">
            <span className="timer__text">hours</span>
          </div>
        </li>

        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">{minutes}</div>
          </div>

          <div className="text-container">
            <span className="timer__text">minutes</span>
          </div>
        </li>

        <li className="timer-list__timer">
          <div className="time-container">
            <div className="timer__time">{seconds} </div>
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
