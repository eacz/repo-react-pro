import { lazy, LazyExoticComponent } from 'react';
import { Route } from 'react-router';
import NoLazy from '../01-lazyload/pages/NoLazy';

interface route {
  path: string
  Component: LazyExoticComponent<() => JSX.Element> | ( () => JSX.Element ),
  name: string,
  children?: Route[]
}

//const LazyPage1 = lazy(() => import(/* webpackChunkName: "lazypage1" */ '../01-lazyload/pages/LazyPage1'))
const LazyNested = lazy(() => import(/* webpackChunkName: "lazyload" */ '../01-lazyload/layout/LazyLayout'))

const routes: route[] = [
  {
    path: '/lazyload',
    Component: LazyNested,
    name: 'Lazy Nested'
  },
  {
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No lazy'
  }
]


export default routes;