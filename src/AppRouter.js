import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./containers/auth/login";
import ConfirmSignin from "./containers/auth/confirmSignin";
import EmailSent from "./containers/auth/emailSent";
import PasswordReset from "./containers/auth/passwordReset";
import CreateContent from "./containers/createContent";
import AddAdmin from "./containers/addAdmin";
import ContentListing from "./containers/contentListing";
import Admins from "./containers/admins";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRouter() {
  return (
    <div style={{}}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute isProtected={false} exact path="/" component={Login} />
          <ProtectedRoute isProtected={false} exact path="/password-reset" component={PasswordReset} />
          <ProtectedRoute isProtected={false} exact path="/confirm-signin" component={ConfirmSignin} />
          <ProtectedRoute isProtected={false} exact path="/email-sent" component={EmailSent} />
          <ProtectedRoute isProtected={true} exact path="/content-listing" component={ContentListing} />
          <ProtectedRoute isProtected={true} exact path="/create-content" component={CreateContent} />
          <ProtectedRoute isProtected={true} exact path="/admins" component={Admins} />
          <ProtectedRoute isProtected={true} exact path="/add-admin" component={AddAdmin} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default AppRouter;
