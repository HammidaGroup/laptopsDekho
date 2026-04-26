import { createContext, useState } from "react";

export const MenuLogicContext = createContext();
const MenuConditionalStateProvider = ({children})=>{
    const [menuVisbleConditionalData, setMenuVisbleConditionalData] = useState(false)
    return(
        <MenuLogicContext.Provider value={{menuVisbleConditionalData , setMenuVisbleConditionalData}}>
            {children}
        </MenuLogicContext.Provider>
    )
}
export default MenuConditionalStateProvider;