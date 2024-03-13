import { createContext, useContext } from "react";

export const userContext = createContext({
    themeMode: 'light',
    darkTheme: function(){},
    lightTheme: function(){}
});

export const ThemeProvider = userContext.Provider

export default function useTheme(){
    return useContext(userContext);
}