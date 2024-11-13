import p1 from '/grocery-store.png'
function Card(props){
    return(
        <div className="w-306 h-395 grid grid-cols-12 grid grid-rows-12 rounded-2xl bg-white mr-8 mt-4 mb-4"> 
            <button className={`transform-all duration-500 rounded-2xl bg-black hover:bg-yellow-500 col-start-2 col-end-12 row-start-2 row-end-7`}>
            <img className="w-full h-full" src={props.im}  />
            </button>
            <div className="mt-2 col-start-2 col-end-12 row-start-7 row-end-8 poppins text-sm font-bold">
                {props.text}  
                <br />
                <span className="text-xs ">{props.price}      
                </span>
                {/* <br />  */}
            </div>
                <div className='text-white text-sm bg-black h-8 mt-1 rounded-2xl col-start-2 col-end-12 row-start-9 row-end-10 text-center'>
                    <button className='mt-1 font-poppins mt-2  text-center'>Buy Now</button>
                </div>
                
                <div className='text-white text-sm bg-black h-8 rounded-2xl  col-start-2 col-end-12 row-start-11  row-end-12 text-center'>
                    <button className=' mt-1 font-poppins mt-2'>Add to Cart</button>
                </div>                
            

            
        </div>
    )
}
export default Card;