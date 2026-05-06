import { createContext, useState } from "react";

export const MenuLogicContext = createContext();
const MenuConditionalStateProvider = ({children})=>{
    const [isMenu, setisMenu] = useState(false)
    return(
        <MenuLogicContext.Provider value={{isMenu , setisMenu}}>
            {children}
        </MenuLogicContext.Provider>
    )
}
export default MenuConditionalStateProvider;