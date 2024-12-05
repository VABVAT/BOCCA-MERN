import { jwtDecode } from "jwt-decode";
import { useRef } from "react"



function CartCard(props){

    const productId = useRef("");
    productId.current = props.id
    async function deleteItem(){
        const response = await fetch("https://bocca-mern-gis9.vercel.app/delete", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSONstringify({
                uid : jwtDecode(localStorage.getItem('token')).id,
                pid : productId.current
            })
        })
        window.location.reload()
    }
    
    return(
        <div className="flex flex-row  justify-between around items-center ml-4 overflow-y-hidden w-[95%] h-20 border-2 border-black ">
          <div className=" h-[90%] w-[20%]  ml-4 flex flex-row "> 
            <img src={props.im} alt="image address" className="h-[90%]"/>
          </div>
            <div className="font-poppins mr-8 flex flex-row items-left w-[20%]">
                {props.text}
                <br />
                {props.price}
            </div>
            <div>
                <button className="mr-4" onClick={deleteItem} >Delete</button>
            </div>
            <div className="mr-4">
                quantity : {props.quantity}
            </div>
        </div>
    )
}
export default CartCard