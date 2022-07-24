import Classes from "./ResumeButton.module.css";
import DownloadIcon from "@mui/icons-material/Download";

const ResumeButton = () => {
  return (
    <div className={Classes.button_div}>
      <div className={Classes.button_div_text}>
        <p className={Classes.button_text}>Download Resume</p>
      </div>
      <div className={Classes.icon_div}>
        <DownloadIcon />
      </div>
    </div>
  );
};

export default ResumeButton;
