import { useEffect, useState } from "react"

function useFetch(url){
    const [arr, setArr] = useState({});
    const ftch = async () => {
        const otpt = await fetch(url);
        const answer = await otpt.json();
        setArr(answer);
    }
    
    useEffect(() => {
        ftch();
     }, [])
    
     return arr;
}

export default useFetch