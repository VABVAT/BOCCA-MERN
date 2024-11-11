import Searchbar from './Searchbar.jsx';
import logo from '/search.png';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import gc from '/grocery-store.png'
import user from '/user.png'
function Header(){
    const [isVisible, setVisible] = useState(false);
    return(
        <div className='bg-white h-44 flex flex-row items-center justify-center md:justify-start flex-wrap md:flex-nowrap'> 
        <Link to='/'className='font-poppins  font-bold text-5xl ml-0 md:ml-10'>
       BOCCA
       </Link>
       <div>
        <button onClick={() => (setVisible(true))}><img src={logo} className={`transition-all duration-500   ${!isVisible ? 'w-8 h-8 ml-16 opacity-100 mr-16' : 'w-0 h-0 opacity-0'}`}></img></button> 
       </div>
       <Searchbar Active={isVisible}/>
       <div className='w-24 h-8 md:ml-auto md:mr-[8%] flex flex-row justify-between'>
            <button className='w-8'> <img src={gc} alt="shopping cart logo" /> </button>
            <button> <img className ='w-8 rounded-2xl' src={user} alt="" /></button>
       </div>
      </div>
    )
}
export default Header;