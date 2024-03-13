import React, { useState, useEffect, FC } from 'react';
import { ThemeContext, themes } from './ThemeContext';

interface Props {
    children: React.ReactNode;
}

const ThemeContextWrapper: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(
        () => {
            return localStorage.getItem('theme') || themes.dark;
        }
    );

    function changeTheme(newTheme: string) {
        setTheme(newTheme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('white-content');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('white-content');
                break;
        }
    }, [theme]);
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextWrapper;
