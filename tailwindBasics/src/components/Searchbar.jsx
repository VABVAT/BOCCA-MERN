import { useState } from "react";
import logo2 from '/image.png'
function Searchbar({Active}){
    const [active, setActive] = useState(Active);
    return <>
    <div className={` ${Active ? ' flex' : 'hidden'}`}>
      <input type='text' placeholder='search here' className={`transition-all duration-500 border-2 border-black rounded-xl  ${Active ? 'w-80 opacity-100' : 'w-0 opacity-0'} w-60 h-8 ml-0 md:ml-24 pl-5`}></input>
      <button> <img src={logo2}className=' w-7 h-7 ml-1'/> </button>
      </div>
    </>
  }
  export default Searchbar;