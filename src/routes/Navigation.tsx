import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import RegisterPage from "../03-forms/pages/RegisterPage";
import logo from '../logo.svg'
import FormikYupPage from '../03-forms/pages/FormikYupPage';
import FormikComponents from '../03-forms/pages/FormikComponents';

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
              <NavLink activeClassName="nav-active" exact to="/formik-basic">Formik Basic</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-yup">Formik & Yup</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-components">Formik Components</NavLink>
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
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
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