import Pb from '/Pb.jpeg'
import p2 from '/p2.jpeg'
import r1 from '/R1.jpeg'
import Ld from '/Ld.jpeg'
import {useState, useEffect} from 'react'
function Slidebar(){
    const [Images, setImages] = useState([r1, p2, Ld]);
    const [Index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => ((prev + 1)%Images.length))

        }, 4000);
        return () => {clearInterval(interval)};
    }, [])
    return(
        <div className="flex flex-row justify-center align-center items-center overflow-x-hidden" > 
            <img src={Images[Index]} className={`transform-all duration-500 w-[350px] h-[450px] rounded-2xl ${visible ? "translate-x-0" : "-translate-x-full"}`} />
        </div>
    )
} 
export default Slidebar