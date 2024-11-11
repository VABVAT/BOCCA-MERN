import p1 from '/grocery-store.png'
function Card(props){
    return(
        <div className="w-306 h-395 grid grid-cols-12 grid grid-rows-12 rounded-2xl bg-white mr-8 mt-4 mb-4"> 
            <button className={`transform-all duration-500 rounded-2xl bg-black hover:bg-yellow-500 col-start-2 col-end-12 row-start-2 row-end-10`}>
            <img className="w-full h-full" src={props.im}  />
            </button>
            <div className="mt-2 col-start-2 col-end-12 row-start-10 row-end-11 poppins text-sm font-bold">
                {props.text}  
                <br />
                <span className="text-xs row-start-11 row-end-12">{props.price}      
                </span>
                {/* <br />  */}
            </div>
            <div className='mt-3 row-start-10 col-start-10'>
            <button className=" transform-all duration-500 h-6 w-6 "> 
                    <img src={p1} className='w-full h-full' />
                </button>
            </div>
            
        </div>
    )
}
export default Card;