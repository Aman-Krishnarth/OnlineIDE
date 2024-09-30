import React, { useState } from "react";
import logo from "../images/logo.png";
import image from "../images/authPageSide.png";
import { Link } from "react-router-dom";
import axios from "axios"
import { backendUrl } from "../helper";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();
    axios.post(backendUrl+"/user/login",data).then((res)=>{
      console.log(res)
      localStorage.setItem("token",res.data.token)
    })
  }

  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-between pl-[100px] overflow-hidden">
        <div className="w-[35%]">
          <img src={logo} alt="" className="w-[200px]" />
          <form action="" className="w-full mt-[60px]" onSubmit={submitForm}>
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
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#00AEEF] block lg:inline">
                Sign up here
              </Link>{" "}
            </p>

            <button
              className="bg-[#00AEEF] text-white py-2 px-5 border-none rounded cursor-pointer text-base w-full mt-5 hover:bg-[#0086b3]"
              type="submit"
            >
              Login
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

export default Login;
