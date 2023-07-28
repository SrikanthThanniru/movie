import { Switch, Route } from "react-router-dom";

import SignUpPage from "./component/signUpPage/";
import LoginPage from "./component/loginPage";

const App = () => (
  <>
    <Switch>
      <Route exact path="/login-page/" component={LoginPage} />
      <Route exact path="/" component={SignUpPage} />
    </Switch>
  </>
);

export default App;
