import {Link, useNavigate} from 'react-router-dom'


function Textcontent(){
    const navigate = useNavigate();
    const goThere = () => {
        navigate('/items')
    }

    return(
        <div className=" mt-4 md:mt-8 leading-3 md:leading-4 font-poppins font-bold flex text-center md:text-left flex-wrap text-black text-4xl w-80  h-40 " >
    <span>Experience the</span>
    <p className="text-white mr-2 md:mr-2">premium</p>
    <span>feeling</span>
    <button onClick={goThere} className="transform-all duration-300 font-poppins w-[50%] text-white bg-black rounded-3xl text-base font-normal hover:bg-white hover:text-black">Shop now</button>
   
   </div>
    )
}
export default Textcontent