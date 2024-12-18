import { useContext, useRef } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { buyingContext } from "./BuyingContext";
function Card(props){
    const uniqueId = useRef("");
    uniqueId.current = props.id;
    const {Bal, setBal} = useContext(buyingContext)
    const navigate = useNavigate();
    async function addToCart() {
        if(!localStorage.getItem('token')){
            navigate('/signIn')
        }
        const cart = await fetch("https://bocca-mern-gis9.vercel.app/addToCart", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                id : jwtDecode(localStorage.getItem('token')).id,
                productId : uniqueId.current
            })
        })
    }

    async function Buy() {
        const price = (props.price.split('$')[1]);
        if(!localStorage.getItem('token')){
            navigate('/signIn')
        }
        // !todo: function which goes to backEnd and changes the balance 
        const response = await fetch("https://bocca-mern-gis9.vercel.app/changeBalance", {
            method: "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({
                id : jwtDecode(localStorage.getItem('token')).id,
                price : price,
                Balance : Bal
            })
        })
        const reso = await response.json()
        setBal(reso.price)
    }

    return(
        <div className="w-306 h-395 grid grid-cols-12 grid grid-rows-12 rounded-2xl bg-white mr-8 mt-4 mb-4"> 
            <button className={`transform-all duration-500 rounded-2xl bg-black hover:bg-yellow-500 col-start-2 col-end-12 row-start-2 row-end-7`}>
            <img className="w-[80%] h-[80%] mr-auto ml-auto" src={props.im}  />
            </button>
            <div className="mt-2 col-start-2 col-end-12 row-start-7 row-end-8 poppins text-sm font-bold">
                {props.text}  
                <br />
                <span className="text-xs">{props.price}      
                </span>
            </div>
                <div className='text-white transition-all duration-500  text-sm bg-black h-8 mt-1 rounded-2xl col-start-2 col-end-12 row-start-9 row-end-10 text-center'>
                    <button onClick={Buy} className='mt-1 font-poppins mt-2  text-center'>Buy Now</button>
                </div>
                
                <div className='text-white text-sm bg-black h-8 rounded-2xl  col-start-2 col-end-12 row-start-11  row-end-12 text-center'>
                    <button onClick={addToCart} className=' mt-1 font-poppins mt-2'>Add to Cart</button>
                </div>                
            

            
        </div>
    )
}
export default Card;