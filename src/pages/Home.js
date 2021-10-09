import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="h-96 flex flex-col gap-10 justify-center items-center ">
      <p className="font-bold text-xl ">Frontend Development Starting</p>
      <div className="count">
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default Home;
