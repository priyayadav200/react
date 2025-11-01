import { createContext , useContext } from "react";


export const ThemeContext = createContext({
    themeMode:'light',
    darkTheme : ()=> {
        console.log('dark theme');
    },
    lightTheme : () => {
        console.log('light theme');
    },
});


export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
    
}