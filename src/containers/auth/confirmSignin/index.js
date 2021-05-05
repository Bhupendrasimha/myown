import { useHistory } from "react-router-dom";
import ButtonPrimary from "../../../components/buttons/buttonPrimary";
import ButtonOutline from "../../../components/buttons/buttonOutline";
import InputPrimary from "../../../components/inputPrimary";
import InfoMessage from "../../../components/infoMessage";
import * as yup from 'yup';
import React, { useEffect,useState } from 'react';
import * as UserActions from '../../../store/user/actions';
import { storage } from '../../../services/config/storage';

// Styles
import "./styles.scss";
import { Field, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function ConfirmSignin(props) {
  let history = useHistory();
const[fail,setfail]=useState(false)
  function handleClick() {
    history.replace("/create-content");
  }

  useEffect(() => {
    if (!props.user.email) {
      history.replace('/')
    }
  }, [])

  return (
    <div className="password-reset-style">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <div className="auth-box">
              <div className="info-section">
                <h4 className="title1">Confirm Sign In</h4>
                <div className="description mt--10">
                  Please enter the 6 digit code send to your email
                </div>
              </div>
              <Formik
                initialValues={{
                  otp: "",
                  email: props?.user?.email,
                  
                }}
                validationSchema={yup.object().shape({
                  otp: yup.number().typeError("OTP should be numeric.").required("OTP is required").test('otp', 'OTP should be of six digits', (otp) => otp?.toString()?.length == 6)
                })}
                onSubmit={async (values) => {
                  console.log(values);
                  const response = await props.verifyOtp(values);
                  if (response && !response?.error_message) {
                    storage.set.authToken(response);
                    handleClick();
                  }
                  else {
                    setfail(true)
                    setTimeout(()=>{
                      setfail(false)
                      console.log(fail)
                    },5000)
                      
                      console.log(fail)
                    console.log("Failed login");
                  }

                }}
              >
                {({ values, setFieldValue, submitForm }) => (
                  <div className="form-section mt--45">
                    {/* <div>{JSON.stringify(values)}</div> */}
                    <div className="mb-20">
                      <Field
                        component={InputPrimary}
                        value={values.otp}
                        name="otp"
                        placeholder="Enter verification code"
                        label="Verification Code"
                      />
                      {fail?"OTP Invalid":null}
                    </div>
                    <ButtonPrimary title="Confirm" onClick={() => submitForm()} />
                    <div className="description description-sm bordertop-style">
                      Haven’t received a code?
                    </div>

                    <div className="text-center">
                      <ButtonOutline title="Resend Code" />
                    </div>
                  </div>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </div>

      <InfoMessage />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.User
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    verifyOtp: bindActionCreators(UserActions.verifyOtp, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSignin);
