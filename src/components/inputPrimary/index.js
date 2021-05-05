import { Input } from "antd";
import { Typography } from 'antd';
import { ErrorMessage } from 'formik';
// Styles
import "./styles.scss";

const { Text } = Typography;

function InputPrimary({
  field, // { name, value, onChange, onBlur } For future use.
  //form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc. For future user, no not delete.
  ...props
}) {
  return (
    <div className={`input-style ${props.inputStyle}`}>
      <div className={`label-style ${props.labelStyle}`}>{props.label}</div>
      <Input placeholder={props.placeholder} {...field} />
      {field ? <ErrorMessage
        name={`${field?.name}`}
        render={(msg) => <Text type='danger'>{msg}</Text>}
      /> : null}
    </div>
  );
}

export default InputPrimary;
