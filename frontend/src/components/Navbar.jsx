import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { MdLightMode } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { toggleClass } from "../helper";

function Navbar({setIsGridLayout}) {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div>
          <img src={logo} alt="" className="w-[150px] cursor-pointer" />
        </div>

        <div className="flex items-center gap-2">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Services</Link>
          <Avatar
            name="Wim Mostmans"
            size="50"
            round="50%"
            className="cursor-pointer ml-2"
            onClick={() => {
              setIsDropDown(!isDropDown);
            }}
          />
        </div>

        <div
          className={` ${
            isDropDown ? "flex" : "hidden"
          } dropDownMenu absolute right-[60px] top-[80px] shadow-lg shadow-black/50 bg-[#1A1919]   flex-col justify-around w-[150px] h-[200px] p-[10px] rounded-lg  `}
        >
          <div className="py-[10px] border-b-[1px] border-b-[#fff] cursor-default">
            <h3 className="text-lg">Kratos ForeverOP</h3>
          </div>

          <i className="flex items-center gap-2 mt-3 mb-2 cursor-pointer h-full w-full hover:bg-[#4f4b4b] py-2">
            {" "}
            <MdLightMode className="text-xl " />
            Light Mode
          </i>

          <i className="flex items-center gap-2 mt-3 mb-2 cursor-pointer h-full w-full hover:bg-[#4f4b4b] py-2"
          onClick={()=>setIsGridLayout((prev)=>!prev)}
          >
            {" "}
            <BsFillGridFill className="text-xl " />
            Grid Layout
          </i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
