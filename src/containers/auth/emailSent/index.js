import InfoMessage from "../../../components/infoMessage";
import ButtonOutline from "../../../components/buttons/buttonOutline";
import email from "../../../assets/images/email.svg";

// Styles
import "./styles.scss";

function EmailSent() {
  return (
    <div className="email-sent-style">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <div className="auth-box">
              <div className="info-section">
                <img src={email} className="imageStyle" alt=""/>
                <h4 className="title1">Reset link sent!</h4>
                <div className="description mt--10">
                  Check your inbox to change your password
                </div>
              </div>

              <div className="form-section mt--45">
                <div className="description description-sm bordertop-style">
                  Didn’t receive any mail?
                </div>

                <div className="text-center">
                  <ButtonOutline
                    title="Resend Link"
                    onClick={() => {
                      console.log("Link Send");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoMessage/>
    </div>
  );
}

export default EmailSent;
