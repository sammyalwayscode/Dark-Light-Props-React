import { useState } from "react";
import Home from "./Components/Home/Home";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  generalBackground: "#fafafa",
  titleColor: "Black",
  contentColor: "#aaa",
  cardColor: "#fff",
};

const DarkTheme = {
  generalBackground: "#282c36",
  titleColor: "#ddd",
  contentColor: "#fff",
  cardColor: "#485063",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <Home theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </div>
  );
};

export default App;
