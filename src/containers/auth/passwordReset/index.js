import {useHistory} from "react-router-dom";
import ButtonPrimary from "../../../components/buttons/buttonPrimary";
import ButtonOutline from "../../../components/buttons/buttonOutline";
import InputPrimary from "../../../components/inputPrimary";
import InfoMessage from "../../../components/infoMessage";

// Styles
import "./styles.scss";

function PasswordReset() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  function handleResetClick() {
    history.push("/email-sent");
  }
  
  return (
    <div className="password-reset-style">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <div className="auth-box">
              <div className="info-section">
                <h4 className="title1">Password Reset</h4>
                <div className="description mt--10">
                  We Will Help You Reset your Password
                </div>
              </div>

              <div className="form-section mt--45">
                <InputPrimary placeholder="Enter Email Address" label="Email"/>
                <ButtonPrimary title="Reset Password" onClick={handleResetClick} btnStyle="mt--15" />
                <div className="description description-sm bordertop-style">
                  Remembered your Password?
                </div>

                <div className="text-center">
                  <ButtonOutline
                    title="Back to Sign In"
                    onClick={handleClick}
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoMessage />
    </div>
  );
}

export default PasswordReset;
