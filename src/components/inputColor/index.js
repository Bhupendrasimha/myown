import { Input } from "antd";
import { Typography } from 'antd';
import { ErrorMessage } from 'formik';
// Styles
import "./styles.scss";

const { Text } = Typography;

function InputColor({
    
  field, // { name, value, onChange, onBlur } For future use.
  //form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc. For future user, no not delete.
  ...props
}) {
    const handleonChange=(e)=>{
console.log(e.target.value)
props.setColour(e.target.value)
    }
    
const after=(<><input style={{height:"42px",
borderRadius: "4px"}} type="color" onChange={handleonChange} id="favcolor" name="favcolor" value="#ff0000"/></>)

  return (
    <div className={`input-style ${props.inputStyle}`}>
      <div className={`label-style ${props.labelStyle}`}>{props.label}</div>
      <Input className='input' onChange={handleonChange} addonAfter={after} placeholder={props.placeholder} {...field} />
      {field ? <ErrorMessage
        name={`${field?.name}`}
        render={(msg) => <Text type='danger'>{msg}</Text>}
      /> : null}
    </div>
  );
}

export default InputColor;
