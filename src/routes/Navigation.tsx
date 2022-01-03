import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import RegisterPage from "../03-forms/pages/RegisterPage";
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink activeClassName="nav-active" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/users">
            <h1>users</h1>
          </Route>
          <Route path="/">
            <h1>home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation