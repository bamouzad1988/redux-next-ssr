import { wrapper } from "@/store/store";
import {
  inc,
  selectCounterState,
  dec,
  incNum,
} from "@/store/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCounterState);
  return (
    <>
      <div>
        <div>
          <span>counter: </span>
          <span>{count}</span>
        </div>
        <div>
          <button
            onClick={() => dispatch(inc())}
            style={{ margin: 20, padding: 5 }}
          >
            INC
          </button>
          <button
            onClick={() => dispatch(dec())}
            style={{ margin: 20, padding: 5 }}
          >
            DEC
          </button>
          <button
            onClick={() => dispatch(incNum(5))}
            style={{ margin: 20, padding: 5 }}
          >
            INC BY NUM
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
