import { useEffect, useState } from "react"

function useFetch(url){
    const [arr, setArr] = useState({});
    const ftch = async () => {
        const otpt = await fetch(url, {
            method : "GET"
        });
        const answer = await otpt.json();
        setArr(answer);
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            ftch();
        }, 1000)
        return () => {
            clearInterval(interval)
        }
     }, [])
    
     return arr;
}

export default useFetch