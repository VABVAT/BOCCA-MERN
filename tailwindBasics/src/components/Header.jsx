import Searchbar from './Searchbar.jsx';
import logo from '/search.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import gc from '/grocery-store.png';
import user from '/user.png';
import { jwtDecode } from 'jwt-decode';
import { buyingContext } from './BuyingContext.jsx';

function Header() {
    const [isVisible, setVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const {Bal, setBal} = useContext(buyingContext);
    const loggedIn = useRef(false)
    const userName = useRef("")
    const userBalance = useRef()
    const navigate = useNavigate()
    const goThere = () => {
        navigate('/signIn')
    }
    const signUpNav = () => {
        navigate('/signUp')
    }
    const goToCart = () => {
        if(loggedIn.current === true){
            navigate('/Cart')
        }else{
            navigate('/signIn')
        }
    }
    // ! to do
    function logOut() {
        localStorage.removeItem('token');
        loggedIn.current = false;
        window.location.reload();
    }

    const value = localStorage.getItem("token");
    if (value) {
        loggedIn.current = true;
    }else{
        loggedIn.current = false;
    }
    async function getBal(uid){
        const response = await fetch("https://bocca-mern-gis9.vercel.app/addToCart", {
            method : "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                id: uid
            })
        })
        const respo = await response.json();
        return respo.Balance;
    }
    useEffect(() => {

        if(loggedIn.current){
            const token = localStorage.getItem('token')
            const decodedToken = jwtDecode(token)
            const id = decodedToken.id;
            async function fetchBal() {
                const balance = await getBal(id)
                setBal(balance)
            }
            fetchBal()
        }
    }, [loggedIn.current, Bal])

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            loggedIn.current = false;
        }
        else {
            const interval = setInterval(() => {
            const decodedToken = jwtDecode(token);
            const currTime = Date.now() / 1000;
            loggedIn.current = currTime < decodedToken.exp;
            if(currTime > decodedToken.exp){
                localStorage.removeItem('token');
            }

            }, 1000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [])



    return (
        <div className={`bg-white h-44 flex flex-col  flex-wrap md:flex-row flex-wrap items-center justify-center p-4 md:px-10`}>
            {/* Logo Link */}


            {/* Search Button and Searchbar */}
            <div className="flex flex-wrap md:ml-10" >
                <Link to="/" className="font-poppins font-bold text-4xl ml-auto mr-auto md:text-5xl">
                    BOCCA
                </Link>
                <button className='ml-8' onClick={() => setVisible(!isVisible)}>
                    <img
                        src={logo}
                        className={` transition-all duration-1000 ${!isVisible ? 'w-8 h-8 opacity-100' : 'w-0 h-0 opacity-0'}`}
                        alt="search icon"
                    />
                </button>
                <Searchbar Active={isVisible} />
            </div>
            {loggedIn.current ? <div>
                
            </div> : null}
            {/* Cart and User Icon with Dropdown */}
            <div className="md:ml-auto flex items-center space-x-6 mt-4 md:mt-0">
                {/* Shopping Cart Button */}
                <button onClick={goToCart} className="w-8 h-8">
                    <img src={gc} alt="shopping cart logo" />
                </button>

                {/* User Profile and Dropdown */}
                <button className="w-8 h-8" onClick={() => setToggle(!toggle)}>
                    <img className="w-8 rounded-full" src={user} alt="User profile" />
                </button>

                {/* Dropdown Menu */}
                {(toggle && !loggedIn.current) ? (
                    <div className="mt-8 absolute top-32 md:top-20 mt-2 bg-white shadow-lg rounded-md p-2 text-center">
                        <button onClick={goThere} className="p-2 w-full rounded-md hover:bg-black hover:text-white font-poppins transition duration-300">
                            Log in
                        </button>
                        <button onClick={signUpNav} className="p-2 w-full rounded-md hover:bg-black hover:text-white font-poppins transition duration-300 mt-1">
                            Sign up
                        </button>
                    </div>
                ) : null}
                {(toggle && loggedIn.current) ? (
                    <div className="mt-8 transform-all duration-500  absolute top-32 hover:bg-black hover:text-white md:top-20 mt-2 bg-white shadow-lg rounded-md p-2 text-center">
                        <button onClick={logOut}> Log out </button>
                    </div>
                ) : null}
                {(loggedIn.current) ? (<div className="font-bold"> Available Balance: ${Bal}</div> ): null}
            </div>
        </div>
    );
}

export default Header;
