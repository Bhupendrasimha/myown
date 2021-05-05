// Styles
import "./styles.scss";

function ButtonOutline(props) {
  return (
    <div className={`button-outline-style ${props.btnStyle}`}>
      <button type="button" className={`btn ${props.color}`} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
}

export default ButtonOutline;
