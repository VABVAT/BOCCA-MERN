import { useNavigate } from "react-router-dom"
import CartCard from "./CartCard"
import la from '/left-arrow.png'
function CartPage(){
    const navigate = useNavigate();
    return <div className="grid grid-cols-12 grid-rows-12  min-w-screen h-screen ">
    <div className=" col-start-1 col-end-13 bg-black row-start-1 row-end-3" >
        <button className="ml-3 mt-4  text-white" onClick={() => {navigate('/')}}>
            <img src={la} className="w-8"/>
        </button>
    </div>
    <div className="col-start-4 col-end-9 overflow-x-hidden   row-start-4 row-end-10">
    <CartCard im={la}/>   
    </div>
    
    
    </div>
}

export default CartPage