import { createContext, useState } from "react";

export const buyingContext = createContext(null)

function BuyingContext({children}){
    const [Bal, setBal] = useState();
    return(
        <buyingContext.Provider value={{Bal, setBal}}>
            {children}
        </buyingContext.Provider>
    )
}
export default BuyingContext