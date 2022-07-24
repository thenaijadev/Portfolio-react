import Classes from "./HomeIntroduction.module.css";
import TypeWriterEffect from "react-typewriter-effect";
import useWindowDimensions from "../../Helpers/WindowDimentions";
import { getWindowDimensions } from "../../Helpers/WindowDimentions";
const HomeIntroduction = (props) => {
  const { height, width } = useWindowDimensions();
  const fontSize = width * 0.052;
  const fontSizeMobile = width * 0.1;
  return (
    <div className={Classes.intro}>
      <TypeWriterEffect
        className={Classes.TypeWriterEffect}
        textStyle={{
          marginLeft: `${width > 900 ? null : "40"}px`,
          marginTop: `${width > 900 ? "-70" : "-100"}px`,
          marginBottom: `${width > 900 ? null : "30"}px`,
          fontFamily: "'Monaco', 'Courier New', monospace",
          fontSize: `${width > 900 ? fontSize : fontSizeMobile}px`,
          // textAlign: `${width > 900 ? "left" : "center"}`,
          color: `${props.isDark ? "White" : "black"}`,
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
