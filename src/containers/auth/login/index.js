import {Link, useHistory} from "react-router-dom";
import logoImage from "../../../assets/images/logo.svg";
import ButtonPrimary from "../../../components/buttons/buttonPrimary";
import CheckboxPrimary from "../../../components/checkboxPrimary";
import InfoMessage from "../../../components/infoMessage";
import InputPrimary from "../../../components/inputPrimary";
import {Formik, Field, ErrorMessage} from "formik";
import * as UserActions from "../../../store/user/actions";
import * as yup from "yup";
import React, {useState, useEffect} from "react";

// Styles
import "./styles.scss";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {storage} from "../../../services/config/storage";

function Login(props) {
  const [keepLoggedIn, setKeepLoggedIn] = useState(
    storage.fetch.keepLoggedIn() ? true : false
  );

  let history = useHistory();

  function handleClick() {
    history.push("/confirm-signin");
  }

  useEffect(() => {
    if (keepLoggedIn) {
      storage.set.keepLoggedIn();
    } else {
      storage.destroy.keepLoggedIn();
    }
  }, [keepLoggedIn]);

  return (
    <div className="login-page-style">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <div className="auth-box">
              <div className="info-section">
                <img src={logoImage} className="logo-img" alt="" />
                <h4 className="title3">Sign In</h4>
              </div>

              <Formik
                enableReinitialize
                initialValues={{
                  email: "",
                  password: "",
                  user_type: 1,
                }}
                validationSchema={yup.object().shape({
                  email: yup.string().email().required("Email is required"),
                  password: yup.string().required("Password is required"),
                })}
                onSubmit={async (values) => {
                  console.log(values);
                  const response = await props.login(values);
                  console.log(response);
                  if (response?.success) {
                    handleClick();
                  } else {
                    console.log("Incorrect username or password");
                  }
                }}
              >
                {({values, setFieldValue, submitForm}) => (
                  <form>
                    {/* <div>{JSON.stringify(values)}</div> */}
                    <div className="form-section mt--45">
                      <div className="mb-20">
                        <Field
                          component={InputPrimary}
                          name="email"
                          value={values.email}
                          placeholder="Enter Email Address"
                          label="Email"
                        />
                      </div>
                      <div className="mb-20">
                        <Field
                          component={InputPrimary}
                          name="password"
                          value={values.password}
                          placeholder="Enter Password"
                          label="Password"
                        />
                      </div>
                      <CheckboxPrimary
                        label="Keep me signed in"
                        checked={keepLoggedIn}
                        onChange={(event) =>
                          setKeepLoggedIn(event.target.checked)
                        }
                      />

                      <ButtonPrimary
                        title="Sign In"
                        onClick={() => submitForm()}
                        btnStyle="mt--15"
                      />

                      <div className="text-center mt--25">
                        <Link className="btn-link" to="/password-reset">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                  </form>
               
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
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(UserActions.login, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
