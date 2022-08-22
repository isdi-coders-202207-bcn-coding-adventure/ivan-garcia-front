const Counter = () => {
  return (
    <ul className="field-list">
      <li className="field-list__field">
        <div className="field__time">Days</div>
        <h2 className="field__title">Days</h2>
      </li>

      <li className="field-list__field">
        <div className="field__time">Hours</div>
        <h2 className="field__title">Hours</h2>
      </li>

      <li className="field-list__field">
        <div className="field__time">Minutes</div>
        <h2 className="field__title">Minutes</h2>
      </li>

      <li className="field-list__field">
        <div className="field__time">Seconds</div>
        <h2 className="field__title">Seconds</h2>
      </li>
    </ul>
  );
};

export default Counter;
