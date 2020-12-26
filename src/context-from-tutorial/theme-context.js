import { light } from "@material-ui/core/styles/createPalette";
import {createContext} from 'react'
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = createContext({
    theme: light,
    toggleTheme: () => {},
})