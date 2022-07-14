import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Classes from "./RoundButton.module.css";
import { useContext } from "react";
import DarkModeContext from "../../Context/dark-mode-context";
const RoundButton = () => {
  const DarkModeData = useContext(DarkModeContext);
  return (
    <div
      className={`${Classes.button} ${
        DarkModeData.inDarkMode ? Classes.button_dark : null
      }`}
    >
      <HomeIcon
        sx={{
          fontSize: 40,
          color: `${DarkModeData.inDarkMode ? "	gainsboro" : "whitesmoke"}`,
        }}
      />
    </div>
  );
};

export default RoundButton;
