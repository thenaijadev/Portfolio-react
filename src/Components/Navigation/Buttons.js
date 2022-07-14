import RoundButton from "../UI/RoundButton.jsx/Roundbutton";
import Classes from "./Buttons.module.css";
import CustomizedSwitches from "../UI/DarkModeToggle";
import { useContext } from "react";
import DarkModeContext from "../Context/dark-mode-context";
const Buttons = () => {
  const DarkModeData = useContext(DarkModeContext);
  return (
    <div className={Classes.Buttons}>
      <CustomizedSwitches
        onChange={DarkModeData.onDarkMode}
      ></CustomizedSwitches>
      <RoundButton />
      <RoundButton />
      <RoundButton />
      <RoundButton />
      <RoundButton />
      <RoundButton />
    </div>
  );
};

export default Buttons;
