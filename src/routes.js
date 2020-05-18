// 集中式路由 http://bit.ly/2qFibSD

/* Test */
import ExamplePage from './components/Test/ExamplePage/ExamplePage'
import TestPage from './components/Test/TestPage/TestPage'
import TestChildPage from './components/Test/TestChildPage/TestChildPage'

const routes = [
  {
    path: '/test',
    exact: true,
    component: TestPage,
    breadcrumbName: 'TestPage',
    routes: [
      {
        path: '/test/:id',
        exact: true,
        component: TestChildPage,
        breadcrumbName: 'TestChildPage'
      }
    ]
  },
  {
    path: '*',
    component: ExamplePage,
    breadcrumbName: 'ExamplePage'
  }
]

export default routes
