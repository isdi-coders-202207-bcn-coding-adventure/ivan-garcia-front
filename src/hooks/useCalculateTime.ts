import { useEffect, useState } from "react";
import calculateTime from "../utils/calculateTime";
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

export const useCalculateTime = (endDate: Date) => {
  const [timerState, setTimerState] = useState(initialState);

  useEffect(() => {
    setInterval(() => {
      let today = new Date();
      let timeRemain =
        Date.parse(endDate.toString()) - Date.parse(today.toString());
      console.log(timeRemain);

      const time = calculateTime(timeRemain);
      setTimerState(time);
    }, 1000);
  }, [endDate]);

  return timerState;
};
