import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/counter";

const Home = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="h-96 flex flex-col gap-10 justify-center items-center ">
      <p className="font-bold text-xl ">Frontend Development Starting</p>
      <div className="count text-3xl font-semibold">
        <span>{count}</span>
      </div>
      <div className="btn flex gap-5">
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-1 bg-black hover:bg-gray-800 rounded-md shadow-md  text-white font-bold"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-1 bg-black hover:bg-gray-800 rounded-md shadow-xl  text-white font-bold"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
