import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from '/back.png'
import la from '/left-arrow.png'
import Pb from '/Pb.jpeg'
const Logincmp = (props) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    function goBack(){
      navigate('/')
    }
    async function sendN(){

    }

    async function sendR(){
      console.log(ref1.current.value)
      setError(false)
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
        }else{
          setError(true)
        }
    }

  return (
    <div className="flex flex-row h-screen bg-gradient-to-b from-gstart to-gend  min-w-screen">
      <div className="basis-0 md:basis-1/2 bg-white ">
        <div className="basis-full h-[8%] mt-1  flex flex-row">
          <button onClick={goBack} className=" hidden md:block flex-start ml-2 basis-2/12"><img src={back} className="h-[80%]"  alt="" /></button>
        </div>
        <br />
        <div className="flex h-[89%] flex-row align-center items-center justify-center" >
              <img src={Pb} className="w-[60%] h-[70%] rounded-xl"  />
        </div>
        
      </div>
      <div className="basis-full md:basis-1/2 bg-black flex flex-row justify-center items-center">
        <button className="absolute md:hidden w-10 mt-2 text-white top-4 left-4" onClick={goBack} > <img src={la} alt="" /></button>
        
        <div className="basis-1/2 bg-white h-[58%] flex flex-row rounded-xl flex-wrap">
            <div className="basis-full   flex flex-row h-[20%]">
               <div className="h-[100%] content-center font-poppins justify-center text-center  text-2xl font-medium basis-full"> Login Here </div> 
            </div>

            <div className="basis-full flex flex-row  items-center  h-[20%]">
              <input ref={ref1} className=" basis-full ml-2 mr-2 border-black border-2 h-[60%] rounded-xl p-4" placeholder="Username" type="text" />
            </div>
            <div className="basis-full flex flex-row    h-[20%]">
              <input ref={ref2} className="basis-full ml-2 mr-2 border-black border-2 h-[60%] rounded-xl p-4" placeholder="Password" type="password" />
            </div>
            <div className="w-[100%] text-center" >
              {error && props.mode === '0' ? <div className="w-[100%] font-bold text-center text-red-500">Incorrect credentials</div> : null}
            </div>
            <div className="basis-full  h-[20%] flex flex-row justify-center mb-3" >
              {props.mode === "0" ? <button onClick={sendR} className="transform-all w-[90%]  h-[50%] mt-2 duration-500 bg-black  rounded-xl text-white p-2">Login</button> : <button onClick={sendN} className="transform-all w-[90%]  h-[50%] mt-2 duration-500 bg-black  rounded-xl text-white p-2">Sign up</button>} 
            </div>
        </div>
        </div>
    </div>
  );
};

export default Logincmp;
