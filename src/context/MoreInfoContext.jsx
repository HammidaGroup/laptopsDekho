import { createContext, useState } from "react";

export const moreInfoContext = createContext(null)

const MoreInfoContextProvider = ({children})=>{
    const [moreInfoData, setMoreInfoData] = useState([])
   
    console.log(moreInfoData);
    

return (
    <moreInfoContext.Provider value={{moreInfoData , setMoreInfoData}}>
    {children}
</moreInfoContext.Provider>
)
}

export default MoreInfoContextProvider