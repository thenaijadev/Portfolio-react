import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactIcon from "@mui/icons-material/Mail";
import DarkModeContext from "../Context/dark-mode-context";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = useState("up");
  const [hidden, setHidden] = useState(false);
  const Context = React.useContext(DarkModeContext);
  const actions = [
    {
      icon: <HomeIcon />,
      name: "Home",
      click: Context.onHome,
      state: Context.isHome,
    },
    {
      icon: <PersonIcon />,
      name: "About Me",
      click: Context.onProfile,
      state: Context.isProfile,
    },
    {
      icon: <WorkIcon />,
      name: "My Projects",
      click: Context.onWork,
      state: Context.isWork,
    },
    {
      icon: <ContactIcon />,
      name: "Contact Me",
      click: Context.onContact,
      state: Context.isContact,
    },
  ];

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box
        sx={{
          position: "relative",
          mt: 3,
          height: 500,
        }}
      >
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={
            <MenuIcon
              sx={{
                backgroundColor: "#8E05C2",
                padding: "20px",
                borderRadius: "50%",
              }}
            />
          }
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              onClick={action.click}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{
                backgroundColor: `${action.state ? "#ED92FF" : "black"}`,
                padding: "25px",
                color: `${action.state ? "black" : "white"}`,
                border: "2px solid white",
              }}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
