import React, { useState } from "react";

const DarkModeContext = React.createContext({
  inDarkMode: false,
  onLogout: () => {},
  onHome: () => {},
  onContact: () => {},
  onProfile: () => {},
  onWork: () => {},
  isHome: true,
  isContact: false,
  isWork: false,
  isProfile: false,
});

const DarkModeContexProvider = (props) => {
  const [isDark, setIsDark] = useState(true);
  const [onHome, setOnHome] = useState(true);
  const [onProfile, setOnProfile] = useState(false);
  const [onWork, setOnWork] = useState(false);
  const [onContact, setOnContact] = useState(false);
  const DarkmodeHandler = () => {
    setIsDark(!isDark);
  };
  const HomeHandler = () => {
    setOnHome(true);
    setOnProfile(false);
    setOnWork(false);
    setOnContact(false);
  };
  const ProfileHandler = () => {
    setOnHome(false);
    setOnProfile(true);
    setOnWork(false);
    setOnContact(false);
  };
  const WorkHandler = () => {
    setOnHome(false);
    setOnProfile(false);
    setOnWork(true);
    setOnContact(false);
  };
  const ContactHandler = () => {
    setOnHome(false);
    setOnProfile(false);
    setOnWork(false);
    setOnContact(true);
  };
  return (
    <DarkModeContext.Provider
      value={{
        inDarkMode: isDark,
        onDarkMode: DarkmodeHandler,
        onHome: HomeHandler,
        onContact: ContactHandler,
        onProfile: ProfileHandler,
        onWork: WorkHandler,
        isHome: onHome,
        isContact: onContact,
        isWork: onWork,
        isProfile: onProfile,
      }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
export { DarkModeContexProvider };
