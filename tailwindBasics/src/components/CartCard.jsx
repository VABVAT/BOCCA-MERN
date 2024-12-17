import { jwtDecode } from "jwt-decode";
import { useRef } from "react"



function CartCard(props){

    const productId = useRef("");
    productId.current = props.id
    async function deleteItem(){
        const response = await fetch("https://bocca-mern-gis9.vercel.app/delete", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                uid : jwtDecode(localStorage.getItem('token')).id,
                pid : productId.current
            })
        })
        window.location.reload()
    }
    
    return(
        <div className="flex flex-col sm:flex-row  justify-between sm:justify-between around items-center content-center ml-4 overflow-y-hidden w-[95%] sm:h-20 border-t-2 border-b-2 border-black ">
          <div className=" h-[90%] w-[46%]  ml-4 flex flex-row flex-wrap justify-between "> 
            <img src={props.im} alt="image address" className="h-[90%]"/>
            <div className="font-poppins  text-xs sm:text-l mr-8 flex flex-row items-left w-[100%] sm:w-[50%] mt-4">
                {props.text}
                <br />
                {props.price}
            </div>
          </div>

            <div>
                <button className="mr-4" onClick={deleteItem} >delete</button>
            </div>
            <div className="mr-4">
                quantity : {props.quantity}
            </div>
        </div>
    )
}
export default CartCard