import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink activeClassName="nav-active" exact to="/">Shopping</NavLink>
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
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/users">
            <h1>users</h1>
          </Route>
          <Route path="/">
            <ShoppingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation