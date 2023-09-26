// ThemeContext.jsx
import React, { createContext, useContext, useState } from "react";
// import { firstTheme, secondTheme, thirdTheme, fourthTheme } from "./themes";
import allThemes from "./themes";

type Themes = "firstTheme" | "secondTheme" | "thirdTheme" | "fourthTheme";

type ContextType = {
  theme: any;
  onChangeTheme: Function;
};

const ThemeContext = createContext<ContextType>({
  theme: "firstTheme",
  onChangeTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [currentTheme, setCurrentTheme] = useState<Themes>("firstTheme");

  const onChangeTheme = (themeName: Themes) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: allThemes[currentTheme], onChangeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
