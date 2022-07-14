import Classes from "./HomeIntroduction.module.css";
import TypeWriterEffect from "react-typewriter-effect";
import { useState } from "react";

const HomeIntroduction = (props) => {
  return (
    <div className={Classes.intro}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "'Monaco', 'Courier New', monospace",
          fontSize: "400%",
          color: `${props.isDark ? "aliceblue" : "black"}`,
          //
        }}
        startDelay={100}
        cursorColor={`${props.isDark ? "gainsboro" : "black"}`}
        text="Hi, i'm Okwor Chukwuemeka Nnajiofor, Web Developer."
        typeSpeed={100}
      />
      <h3
        className={`${Classes.description} ${
          props.isDark ? Classes.intro_dark : null
        }`}
      >
        Specializing on the front end, i love to create beautiful and functional
        websites using react and all of its realated technologies.
      </h3>
    </div>
  );
};

export default HomeIntroduction;
