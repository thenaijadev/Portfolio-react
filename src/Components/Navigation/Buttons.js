import RoundButton from "../UI/RoundButton.jsx/Roundbutton";
import Classes from "./Buttons.module.css";
import CustomizedSwitches from "../UI/DarkModeToggle";
import { useContext } from "react";
import DarkModeContext from "../Context/dark-mode-context";
import PlaygroundSpeedDial from "./PlayGroundSpeedDail";
const Buttons = () => {
  const DarkModeData = useContext(DarkModeContext);
  return (
    <div className={Classes.Buttons}>
      <PlaygroundSpeedDial />
    </div>
  );
};

export default Buttons;
