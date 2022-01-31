import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom" 
import logo from '../logo.svg'
import { RegisterPage, DynamicFormPage, FormikYupPage, FormikBasicPage, FormikAbstraction, FormikComponents } from '../03-forms/pages'
import RegisterFormikPage from '../03-forms/pages/RegisterFormikPage';

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
              <NavLink activeClassName="nav-active" exact to="/formik-abstract">Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-register">Register Formik</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-dynamic">Dynamic Forms</NavLink>
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
          <Route path="/formik-abstract">
            <FormikAbstraction />
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage />
          </Route>
          <Route path="/formik-dynamic">
            <DynamicFormPage />
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