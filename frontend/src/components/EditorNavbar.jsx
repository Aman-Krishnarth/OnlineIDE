import React, { useState } from "react";
import logo from "../images/logo.png";
import { FiDownload } from "react-icons/fi";

function EditorNavbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-[100px] h-[80px] bg-[#232121]">
        <div>
          <img src={logo} alt="" className="w-[150px] cursor-pointer" />
        </div>

        <p>
          File/ <span className="text-[gray]">My first project</span>{" "}
        </p>
        <i className="p-1 bg-black rounded cursor-pointer text-xl"><FiDownload /></i>
      </nav>
    </div>
  );
}

export default EditorNavbar;
