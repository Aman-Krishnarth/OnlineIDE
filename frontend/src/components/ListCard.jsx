import React, { useState } from "react";
import img from "../images/code.png";
import deleteImg from "../images/delete.png";

function ListCard() {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);

  return (
    <div>
      <div className="w-full p-3 bg-[#141414] flex items-center justify-between rounded-lg cursor-pointer hover:bg-[#202020] mb-2">
        <div className="flex items-center gap-2">
          <img src={img} alt="" className="w-[100px]" />
          <div>
            <h3 className="text-xl">My First Project</h3>
            <p className="text-[gray] text-sm">Created on 9 Mon 2023</p>
          </div>
        </div>
        <div>
          <img
            src={deleteImg}
            alt=""
            className="w-8 cursor-pointer mr-4"
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

export default ListCard;
