const UpdateIncrementDecrement = ({
  incrementValue,
  decrementValue,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <label>Increment</label>
      <input type="number" value={incrementValue} onChange={handleIncrement} />

      <label>Decrement</label>
      <input type="number" value={decrementValue} onChange={handleDecrement} />
    </div>
  );
};

export default UpdateIncrementDecrement;
