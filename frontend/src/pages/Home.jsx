import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";

function Home() {
  const [isGridLayout, setIsGridLayout] = useState(true);

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-between px-[100px] my-10">
        <h2 className="text-2xl">Hi, Kratos 👋</h2>
        <div className="flex items-center gap-1">
          <div className="w-[350px] bg-[#141414] rounded flex items-center mb-4 ">
            <input
              type="text"
              placeholder="Search here...!"
              className="p-2 bornder-none outline-none bg-transparent text-white text-lg"
            />
          </div>
          <button className="bg-[#00AEEF] text-white p-[10px] border-none rounded-md cursor-pointer text-lg mb-4 hover:bg-[#0086b3]">
            +
          </button>
        </div>
      </div>

      <div>
        {isGridLayout ? (
          <div className="px-[100px] flex flex-wrap gap-2 justify-center">
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
          </div>
        ) : (
          <div className="grid px-[100px]">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
