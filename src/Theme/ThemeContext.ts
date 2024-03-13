import { createContext, useContext } from 'react';

export const themes = {
    light: 'light',
    dark: 'dark'
};

interface ThemeContextType {
    theme: string;
    changeTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: themes.dark,
    changeTheme: () => {}
});

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    return themeContext;
};