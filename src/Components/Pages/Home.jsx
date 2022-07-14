import React, { Fragment, useContext, useState } from "react";
import Classes from "./Home.module.css";
import Card from "../UI/Card/Card";
import ImageCard from "../ImageCard/ImageCard";
import HomeIntroduction from "../HomeIntroduction/HomeIntroduction";

import RoundButton from "../UI/RoundButton.jsx/Roundbutton";
import DarkModeContext from "../Context/dark-mode-context";
import Buttons from "../Navigation/Buttons";
const Home = () => {
  const DarkModeData = useContext(DarkModeContext);
  return (
    <div
      className={`${Classes.home} ${
        DarkModeData.inDarkMode ? Classes.home_dark : null
      }`}
    >
      <ImageCard />
      <HomeIntroduction isDark={DarkModeData.inDarkMode} />

      <Buttons />
    </div>
  );
};

export default Home;
