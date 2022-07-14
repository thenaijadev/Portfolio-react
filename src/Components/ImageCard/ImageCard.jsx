import Card from "../UI/Card/Card";
import Portrait from "../../Images/portrait.jpg";
import Classes from "./ImageCard.module.css";
const ImageCard = () => {
  return <img className={Classes.image} src={Portrait} alt="image of me"></img>;
};

export default ImageCard;
