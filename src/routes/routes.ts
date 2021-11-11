import { Route } from 'react-router';
import LazyPage1 from '../01-lazyload/pages/LazyPage1';
import LazyPage2 from '../01-lazyload/pages/LazyPage2';
import LazyPage3 from '../01-lazyload/pages/LazyPage3';

interface route {
  path: string
  Component: () => JSX.Element
  name: string,
  children?: Route[]
}

const routes: route[] = [
  {
    path: '/lazy1',
    Component: LazyPage1,
    name: 'LazyPage 1'
  },
  {
    path: '/lazy2',
    Component: LazyPage2,
    name: 'LazyPage 2'
  },
  {
    path: '/lazy3',
    Component: LazyPage3,
    name: 'LazyPage 3'
  },
]


export default routes;