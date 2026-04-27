import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MenuConditionalStateProvider from './context/menuLogicContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import SearchContextProvider from './context/SearchContext.jsx'
import MoreInfoContextProvider from './context/MoreInfoContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter basename="/">
        <MenuConditionalStateProvider>
            <SearchContextProvider>
                <MoreInfoContextProvider>


                    <App />
                </MoreInfoContextProvider>
            </SearchContextProvider>
        </MenuConditionalStateProvider>
    </BrowserRouter>
)
