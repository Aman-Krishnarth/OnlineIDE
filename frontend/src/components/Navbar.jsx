import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function Navbar() {
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
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
