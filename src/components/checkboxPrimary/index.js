// Styles
import { Checkbox } from "antd";
import "./styles.scss";

function CheckboxPrimary(props) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className={`checkbox-style ${props.checkboxStyle}`}>
      <Checkbox onChange={onChange} {...props}>{props.label}</Checkbox>
    </div>
  );
}

export default CheckboxPrimary;
