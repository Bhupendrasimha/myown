// Styles
import {Link} from "react-router-dom";
import "./styles.scss";

function InfoMessage(props) {
  return (
    <div className={`info-message-style`}>
      <div className="copyright-text">©2021 Amgen, Inc. All Rights Reserved.</div>

      <nav className="footer-navigation">
        <Link className="link-item">Terms Of Service</Link>
        <Link className="link-item">Privacy Policy</Link>
      </nav>
    </div>
  );
}

export default InfoMessage;
