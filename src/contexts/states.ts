import { createContext } from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
}

const StatesContext = createContext<ThemeContextType>({
  isDarkTheme: false,
});

export default StatesContext;