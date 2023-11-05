import { selectCounter, increment } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <span style={{ paddingRight: "2rem" }}>Counter:{counter}</span>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  );
};

export default Counter;
