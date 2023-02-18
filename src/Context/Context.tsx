import { createContext, useState } from "react";


type ofProvider = {
    theme: {
        main: string;
        primary: string;
        secondary: string;
        third: string;
    }
    darkMode: () => void
    lightMode: () => void
}

export const themeContext = createContext({} as ofProvider)
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState({ main: "main", primary: "primary", secondary: "secondary", third: "third" })
    const darkMode = () => {
        return setTheme({ main: "darkmain", primary: "darkprimary", secondary: "darksecondary", third: "darkthird" })
    }
    const lightMode = () => {
        return setTheme({ main: "main", primary: "primary", secondary: "secondary", third: "third" })
    }
    return (
        <themeContext.Provider value={{ theme, darkMode, lightMode }}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider

