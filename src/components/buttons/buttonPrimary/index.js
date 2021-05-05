// Styles
import "./styles.scss";

function ButtonPrimary(props) {
  return (
    <div className={`button-style ${props.btnStyle}`}>
      <button type="button" className={`btn ${props.color}`} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
}

export default ButtonPrimary;
