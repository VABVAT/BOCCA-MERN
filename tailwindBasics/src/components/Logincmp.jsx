import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logincmp = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const navigate = useNavigate();
    async function sendR(){
        const response = await fetch("https://bocca-mern-gis9.vercel.app/signIn", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                userName : ref1.current.value,
                password :  ref2.current.value
            })
        })
        const json = await response.json();
        if(!json.error){
            localStorage.setItem("token" , json.token)
            navigate("/")
        }
    }

  return (
    <div className="flex h-screen bg-gradient-to-b from-gstart to-gend min-h-screen min-w-screen">
      {/* Sidebar */}

      {/* Login Form */}
      <div className="flex flex-1 justify-center items-center ">
        <div className="bg-black text-white p-8 rounded shadow-lg w-full max-w-sm" >
          <h2 className="text-xl font-bold mb-6">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Username
            </label>
            <input
              type="text"
              ref={ref1}
              id="username"
              placeholder="Enter username"
              className="w-full p-2 bg-gray-800 text-white rounded outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              ref={ref2}
              id="password"
              placeholder="Enter password"
              className="w-full p-2 bg-gray-800 text-white rounded outline-none"
            />
          </div>
          <button
            onClick={() => (
                sendR()
            )}
            
            className="w-full bg-white text-black p-2 rounded hover:bg-gray-300 transition"

          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logincmp;
