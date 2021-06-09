import { useState, useEffect, createContext } from 'react';
/** Constants */
import Constants from '@constants/common';
import COLORS from '@constants/colors';
/** Types */
import { ColorMode } from '@customTypes/theme';

export type ThemeContextProps = {
  colorMode: ColorMode;
  setColorMode: (value: ColorMode) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      Constants.INITIAL_COLOR_MODE_CSS_PROP
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (value: ColorMode) => {
    const root = window.document.documentElement;

    // Update state
    rawSetColorMode(value);

    // Update localStorage
    localStorage.setItem(Constants.COLOR_MODE_KEY, value);

    // Update each color
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--${name}`;
      root.style.setProperty(cssVarName, colorByTheme[value]);
    });

    root.style.setProperty(Constants.INITIAL_COLOR_MODE_CSS_PROP, value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
