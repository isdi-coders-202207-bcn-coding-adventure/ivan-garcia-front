import { State } from "../hooks/useCalculateTime";

const calculateTime = (miliSeconds: number): State => {
  const seconds = Math.floor((miliSeconds / 1000) % 60);
  const minutes = Math.floor((miliSeconds / 1000 / 60) % 60);
  const hours = Math.floor((miliSeconds / (1000 * 60 * 60)) % 24);
  const days = Math.floor(miliSeconds / (1000 * 60 * 60 * 24));

  return { seconds, minutes, hours, days };
};

export default calculateTime;
