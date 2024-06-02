
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
export default function DestinationData(props) {
  return (
        <div className={props.cName}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image">
                <img alt="img" src={props.img1}></img>
                <img alt="img" src={props.img2}></img>
            </div>
        </div>

  );
}


