import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import LazyPage1 from '../pages/LazyPage1';
import LazyPage2 from "../pages/LazyPage2";
import LazyPage3 from '../pages/LazyPage3';

const Navigation = () => {
  const {path, url} = useRouteMatch()
  return (
    <>
      <h2>Lazy Layout Pages</h2> 
      <ul>
        <li>
          <Link to={`${url}/lazy1`}> Lazy 1 </Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}> Lazy 2 </Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}> Lazy 3 </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/lazy1`} component={LazyPage1}  />
        <Route exact path={`${path}/lazy2`} component={LazyPage2}  />
        <Route exact path={`${path}/lazy3`} component={LazyPage3}  />

        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  )
}

export default Navigation
