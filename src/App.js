import "./App.css";
import { Fragment, useContext } from "react";
import DarkModeContext from "./Components/Context/dark-mode-context";

import Background1 from "../src/Images/background1.jpg";
import Background2 from "../src/Images/background2.jpg";
import { ContactMail } from "@material-ui/icons";
import Work from "./Components/Pages/Work/Work";
import Profile from "./Components/Pages/Profile/Profile";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Background from "./Components/UI/Background";
import useWindowDimensions from "../src/Helpers/WindowDimentions";
function App() {
  const { height, width } = useWindowDimensions();
  const Context = useContext(DarkModeContext);
  return (
    <Fragment>
      <div className="app">
        {Context.isHome ? <Home /> : null}
        {Context.isWork ? <Work /> : null}
        {Context.isProfile ? <Profile /> : null}
        {Context.isContact ? <Contact /> : null}
      </div>
    </Fragment>
  );
}

export default App;
