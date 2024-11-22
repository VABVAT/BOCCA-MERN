function CartCard(props){
    return(
        <div className="flex flex-row align-center content-center items-center ml-4  w-[100%] h-20 border-2 border-black bg-red-200">
            <img src={props.im} alt="image address" className="w-[20%] h-[80%]" />
        </div>
    )
}
export default CartCard