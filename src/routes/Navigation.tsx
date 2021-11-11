import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import logo from '../logo.svg'
import routes from "./routes";

const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({path, name}) => (
              <li key={path} >
                <NavLink activeClassName="nav-active" exact to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>


        <Switch>
          {routes.map(({Component, path}) => (
            <Route 
              key={path} path={path} 
              render={() => <Component />} 
            />
          ))}
          <Redirect to="/lazy1" />
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation