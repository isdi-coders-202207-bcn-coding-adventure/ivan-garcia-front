import { useEffect, useState } from "react";
import useCalculateTime from "../../hooks/useCalculateTime";

import CounterStyled from "./CounterStyled";

const endDate = new Date("2022-12-31");
export interface State {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

const initialState: State = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

let timeRemain: number;

export const Counter = () => {
  const today = new Date();

  const [timerState, setTimerState] = useState(initialState);
  const { calculateTime } = useCalculateTime();

  timeRemain = Date.parse(endDate.toString()) - Date.parse(today.toString());

  useEffect(() => {
    setInterval(() => {
      const time = calculateTime(timeRemain);
      setTimerState(time);
    }, 1000);
  }, [calculateTime]);

  const { seconds, minutes, hours, days } = timerState;

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
