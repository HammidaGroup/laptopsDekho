import { createContext, useState } from "react";

export const GlobleContext = createContext();
const GlobleContextProvider = ({children})=>{
    const [deleteContextAlert, setDeleteContextAlert] = useState(false)
    console.log(deleteContextAlert);
    
    return(
       <GlobleContext.Provider value={{deleteContextAlert, setDeleteContextAlert}}>
            {children}
       </GlobleContext.Provider>
    )
}
export default GlobleContextProvider;