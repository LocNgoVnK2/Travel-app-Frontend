import "./HeroStyles.css";
export default function Hero(props) {
  return (
    <>
    <div className={props.cName}>
        <img className="herpImg" src={props.heroImg}></img>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.buttonClass}>{props.buttonText}</a>
        </div>
    </div>
    </>
  );
}
//shift +alt +f to format code