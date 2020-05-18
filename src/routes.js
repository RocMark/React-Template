// 集中式路由 http://bit.ly/2qFibSD

/* Test */
import TestPage from './components/Test/TestPage/TestPage'
import ExamplePage from './components/Test/ExamplePage/ExamplePage'

const routes = [
  {
    path: '/test',
    exact: true,
    component: TestPage,
    breadcrumbName: 'TestPage'
  },
  {
    path: '*',
    component: ExamplePage,
    breadcrumbName: 'ExamplePage'
  }
]

export default routes
