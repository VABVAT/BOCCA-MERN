import { useNavigate } from "react-router-dom"
import CartCard from "./CartCard"
import la from '/left-arrow.png'
import p1 from '/p1.png'
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
function CartPage(){
    const navigate = useNavigate();
    const [prods, setProds] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            const token = localStorage.getItem('token')
            if(!token){
                navigate('/signIn')
            }
        }, 5000)
        return () => { clearInterval(interval)
        }
    },[])
    useEffect(() => {
        async function getItems(){
            const token = localStorage.getItem('token')
            if(!token) navigate('/signIn')
            const data = await fetch("https://bocca-mern-gis9.vercel.app/cartItems", {
                method : "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    id : jwtDecode(localStorage.getItem('token')).id,
                })
            })
            const response = await data.json()
            setProds(response.cart)  
        }
        getItems()        
    }, [])
    console.log(prods)


    return <div className="grid grid-cols-12 grid-rows-12  min-w-screen h-screen ">
    <div className=" col-start-1 col-end-13 bg-black row-start-1 row-end-3" >
        <button className="ml-3 mt-4  text-white" onClick={() => {navigate('/')}}>
            <img src={la} className="w-8"/>
        </button>
    </div>
    <div className="col-start-4 col-end-9 overflow-x-hidden   row-start-4 row-end-10">
    {prods.map((curr) => (<CartCard im={curr.Image} text={curr.productName} price={curr.productPrice}/>))}
    </div>
    
    
    </div>
}

export default CartPage