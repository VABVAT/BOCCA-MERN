function CartCard(props){
    return(
        <div className="flex flex-row  justify-between around items-center ml-4 overflow-y-hidden w-[95%] h-20 border-2 border-black ">
            <img src={props.im} alt="image address" className="basis-3 h-[90%] hover:h-[100%] rounded-"/>
            <div className="font-poppins mr-8">
                {props.text}
                <br />
                {props.price}
            </div>
        </div>
    )
}
export default CartCard