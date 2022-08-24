import { useCallback } from "react";
import { State } from "../components/Counter/Counter";

const useCalculateTime = () => {
  const calculateTime = useCallback((miliSeconds: number): State => {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;

    seconds = miliSeconds / 1000;

    seconds = Math.floor((miliSeconds / 1000) % 60);
    minutes = Math.floor((miliSeconds / 1000 / 60) % 60);
    hours = Math.floor((miliSeconds / (1000 * 60 * 60)) % 24);
    days = Math.floor(miliSeconds / (1000 * 60 * 60 * 24));

    return { seconds: seconds, minutes, hours, days };
  }, []);

  return { calculateTime };
};

export default useCalculateTime;
