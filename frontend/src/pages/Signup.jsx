import React, { useState } from "react";
import logo from "../images/logo.png";
import image from "../images/authPageSide.png";
import { Link } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-between pl-[100px] overflow-hidden">
        <div className="w-[35%]">
          <img src={logo} alt="" className="w-[200px]" />
          <form action="" className="w-full mt-[60px]" onSubmit={submitForm}>
            <div className="w-full bg-[#141414] rounded flex items-center mb-4">
              <input
                type="text"
                placeholder="User Name"
                name="username"
                value={data.username}
                onChange={handleInputChange}
                required
                className="p-2 bornder-none outline-none bg-transparent text-white text-base"
              />
            </div>

            <div className="w-full bg-[#141414] rounded flex items-center mb-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleInputChange}
                required
                className="p-2 bornder-none outline-none bg-transparent text-white text-base"
              />
            </div>

            <div className="w-full bg-[#141414] rounded flex items-center mb-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                required
                className="p-2 bornder-none outline-none bg-transparent text-white text-base"
              />
            </div>
            <div className="w-full bg-[#141414] rounded flex items-center mb-4">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                required
                className="p-2 bornder-none outline-none bg-transparent text-white text-base"
              />
            </div>
            <Link
              to="/forgotPassword"
              className="text-red-500 inline-block mb-4 hover:text-red-400"
            >
              Forgot Password
            </Link>
            <p className="text-green-500">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00AEEF] block lg:inline">
                Login here
              </Link>{" "}
            </p>

            <button
              className="bg-[#00AEEF] text-white py-2 px-5 border-none rounded cursor-pointer text-base w-full mt-5 hover:bg-[#0086b3]"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>

        <div className="w-[60%]">
          <img src={image} alt="" className="w-full h-screen object-cover" />
        </div>
      </div>
    </>
  );
}

export default Signup;
