import {Select} from "antd";

// Styles
import "./styles.scss";

function SelectPrimary(props) {
  const {Option} = Select;

  function onChange(value) {
    props.setSelect(`${value}`);
    return value
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div className={`select-style ${props.inputStyle}`}>
      {props.lable && (
        <div className={`label-style ${props.labelStyle}`}>{props.lable}</div>
      )}

      <div className="select-custom">
        <Select
          showSearch
          placeholder={props.placeholder}
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          
          className="select"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {props.options.map((option) => {
            return <Option key={option} value={option}>{option}</Option>;
          })}
        </Select>
      </div>
      {props.error && <p className={props.errorClass}>{props.error}</p>}
    </div>
  );
}

export default SelectPrimary;
