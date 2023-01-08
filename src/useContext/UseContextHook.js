import { createContext, useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const themeContext = createContext(themes.dark);

function UseContextHook() {
  const [themeButton, setThemeButton] = useState(themes.dark);
  return (
    <div>
      <themeContext.Provider value={themeButton}>
        <h1>Change theme color using useContext</h1>
        <Firstchild></Firstchild>
        <button
          onClick={() =>
            setThemeButton(
              themeButton === themes.dark ? themes.light : themes.dark
            )
          }
        >
          change theme
        </button>
      </themeContext.Provider>
    </div>
  );
}

function Firstchild() {
  return (
    <div>
      <h2>From first child</h2>
      <SecondChild></SecondChild>
    </div>
  );
}

function SecondChild() {
  const theme = useContext(themeContext);

  return (
    <h3 style={{ background: theme.background, color: theme.foreground }}>
      From first child
    </h3>
  );
}

export default UseContextHook;
