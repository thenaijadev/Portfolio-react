import React, { Fragment, useContext, useState } from "react";
import Classes from "./Home.module.css";
import ImageCard from "../../ImageCard/ImageCard";
import HomeIntroduction from "../../HomeIntroduction/HomeIntroduction";
import useWindowDimensions from "../../../Helpers/WindowDimentions";
import DarkModeContext from "../../Context/dark-mode-context";
import CustomizedSwitches from "../../UI/DarkModeToggle";
import Buttons from "../../Navigation/Buttons";
import ResumeButton from "../../UI/ResumeButton/ResumeButton";
const Home = () => {
  const { height, width } = useWindowDimensions();
  const DarkModeData = useContext(DarkModeContext);
  return (
    <Fragment>
      <div
        className={`${Classes.home} ${
          DarkModeData.inDarkMode ? Classes.home_dark : null
        }`}
      >
        {width > 900 ? <ImageCard /> : null}
        <HomeIntroduction isDark={DarkModeData.inDarkMode} />
        <CustomizedSwitches
          className={Classes.dark_mode_switch}
          onChange={DarkModeData.onDarkMode}
        ></CustomizedSwitches>
        <Buttons />
        <ResumeButton />
      </div>
    </Fragment>
  );
};

export default Home;
