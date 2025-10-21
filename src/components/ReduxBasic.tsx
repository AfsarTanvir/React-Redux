import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../features/counters/countersSlice";
import type { RootState } from "../app/store";
import { useState, type ChangeEvent } from "react";

interface Props {
  id: number;
}

function ReduxBasic({id}: Props) {
  const [inputValue, setInputValue] = useState<number>(0);
  const counter = useSelector((state: RootState) =>
    state.counters.find((c) => c.id === id)
  );
  const dispatch = useDispatch();

  if (!counter) return null;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value) || 0;
    setInputValue(value);
  }

  function handleAddAmount() {
    dispatch(incrementByAmount({ id, amount: inputValue }));
  }

  return (
    <div className="m-4 text-center bg-white p-2 rounded shadow">
      <h1>Counter {id}</h1>
      <p className="text-xl">{counter.value}</p>

      <div className="flex justify-around gap-2 mt-2">
        <button
          onClick={() => dispatch(increment(id))}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-linear-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Increment
          </span>
        </button>
        <button
          onClick={() => dispatch(decrement(id))}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-linear-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Decrement
          </span>
        </button>
        <button
          onClick={() => dispatch(reset(id))}
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Reset
        </button>
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 w-24"
          placeholder="Amount"
        />

        <button
          onClick={handleAddAmount}
          className="px-4 py-2 bg-blue-700 text-white rounded"
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default ReduxBasic;