import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 2,
    });
  };

  const decrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 2,
    });
  };

  return (
    <>
      <h1>Count Change</h1>
      <div className="reducerContainer">
        <button onClick={() => decrement()} className="buttonClick">
          -
        </button>
        <p>Count:{state.count}</p>
        <button onClick={() => increment()} className="buttonClick">
          +
        </button>
      </div>
    </>
  );
};

export default App;
