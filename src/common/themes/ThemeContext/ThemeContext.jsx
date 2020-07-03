import { createContext } from "react";

export const baseThemeContext = "light";
const ThemeContext = createContext({
  theme: baseThemeContext,
  setTheme: () => {},
});

export default ThemeContext;
