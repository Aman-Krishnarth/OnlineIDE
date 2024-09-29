import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";

function Home() {
  const [isGridLayout, setIsGridLayout] = useState(true);

  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  return (
    <div>
      <Navbar setIsGridLayout={setIsGridLayout} />

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
          <button
            className="bg-[#00AEEF] text-white p-[10px] border-none rounded-md cursor-pointer text-lg mb-4 hover:bg-[#0086b3]"
            onClick={() => setIsCreateModelShow(true)}
          >
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

      {isCreateModelShow && (
        <div className="createModelCon fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgb(0,0,0,0.5)] flex items-center justify-center">
          <div className="createModel w-[25vw] min-h-fit shadow-lg shadow-black/50 bg-[#212121] rounded-[10px] p-[20px]">
            <h3 className="text-2xl">Create New Project</h3>
            <div className="bg-[#202020] mt-4">
              <div className="w-full bg-[#141414] rounded flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  name="projectTitle"
                  className="py-4 px-2 bornder-none outline-none bg-transparent text-white text-base"
                />
              </div>
            </div>
            <div className="flex items-center gap-[10px] w-full mt-2">
              <button className="bg-[#00AEEF] text-white border-none rounded cursor-pointer text-base w-full mt-5 hover:bg-[#0086b3] btnBlue  mb-4 !p-[5px] !px-[10px] !py-[10px]">
                Create
              </button>
              <button
                onClick={() => {
                  setIsCreateModelShow(false);
                }}
                className=" text-white border-none rounded cursor-pointer text-base w-full mt-5 hover:bg-[#0086b3] btnBlue !bg-[#1A1919] mb-4 !p-[5px] !px-[10px] !py-[10px]"
              >
                Cancel
              </button>
			  
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
