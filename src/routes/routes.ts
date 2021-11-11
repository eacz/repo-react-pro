import { lazy, LazyExoticComponent } from 'react';
import { Route } from 'react-router';

interface route {
  path: string
  Component: LazyExoticComponent<() => JSX.Element> | ( () => JSX.Element ),
  name: string,
  children?: Route[]
}

const LazyPage1 = lazy(() => import(/* webpackChunkName: "lazypage1" */ '../01-lazyload/pages/LazyPage1'))
const LazyPage2 = lazy(() => import(/* webpackChunkName: "lazypage2" */ '../01-lazyload/pages/LazyPage2'))
const LazyPage3 = lazy(() => import(/* webpackChunkName: "lazypage3" */ '../01-lazyload/pages/LazyPage3'))

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