import React, { useState } from "react";
import codeImg from "../images/code.png";
import deleteImg from "../images/delete.png";

function GridCard() {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);
  return (
    <div>
      <div className="bg-[#141414] w-[270px] h-[180px] cursor-pointer rounded-lg shadow-lg shadow-black/50 hover:bg-[#202020] p-[10px]">
        <img src={codeImg} alt="" className="w-20 " />

        <h3 className="text-xl w-[90%] line-clamp-1">
          My first project project project
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-base text-[gray]">Created on 9 Mon 2023.</p>
          <img
            src={deleteImg}
            alt=""
            className="w-[30px] cursor-pointer"
            onClick={() => {
              setIsDeleteModelShow(true);
            }}
          />
        </div>
      </div>
      {isDeleteModelShow ? (
        <div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col">
          <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[20px]">
            <h3 className="text-3xl">
              Do you want to delete <br />
              this project
            </h3>
            <div className="flex w-full mt-5 items-center gap-[10px]">
              <button
                onClick={() => {
                  deleteProj(item._id);
                }}
                className="p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsDeleteModelShow(false);
                }}
                className="p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GridCard;
