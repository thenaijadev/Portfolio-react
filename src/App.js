import "./App.css";
import DarkModeContext from "./Components/Context/dark-mode-context";
import Home from "./Components/Pages/Home";
import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(true);
  const DarkmodeHandler = () => {
    setIsDark(!isDark);
  };
  return (
    <DarkModeContext.Provider
      value={{
        inDarkMode: isDark,
        onDarkMode: DarkmodeHandler,
      }}
    >
      <Home></Home>
    </DarkModeContext.Provider>
  );
}

export default App;
