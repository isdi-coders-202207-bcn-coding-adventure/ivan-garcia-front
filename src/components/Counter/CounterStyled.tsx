import styled from "styled-components";

const CounterStyled = styled.div`
  background-color: #243342;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding: 0;

  .timer {
    &-list {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    &__text {
      color: #dedadd;
      font-size: 1rem;
    }
  }

  .time-container {
    background-color: #ffc700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    border-radius: 15px;
    width: 100px;
    height: 100px;
    text-align: center;
    font-size: 2rem;
    color: #243342;
  }

  .text-container {
    text-align: center;
  }
`;

export default CounterStyled;
