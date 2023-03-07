import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserContextProvider } from "./contexts/UsersContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";

export function App() {
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <UserContextProvider>
                    <Router />
                </UserContextProvider>
            </BrowserRouter>
            
            
            <GlobalStyle />            
        </ThemeProvider>    
    )
}
    
    