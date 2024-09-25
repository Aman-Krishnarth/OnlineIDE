import React from "react";
import img from "../images/code.png";
import deleteImg from "../images/delete.png";

function ListCard() {
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
          <img src={deleteImg} alt="" className="w-8 cursor-pointer mr-4" />
        </div>
      </div>
    </div>
  );
}

export default ListCard;
