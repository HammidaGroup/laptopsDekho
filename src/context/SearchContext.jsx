import { createContext, useState } from "react";

export const searchContext = createContext();

const SearchContextProvider = ({children})=>{
    
    const [searchTerm, setSearchTerm] = useState();
      const [selectedRange, setSelectedRange] = useState(null);
    return (
        <searchContext.Provider value={{searchTerm, setSearchTerm, selectedRange, setSelectedRange}}>
            {children}
        </searchContext.Provider>
    );
}
export default SearchContextProvider;