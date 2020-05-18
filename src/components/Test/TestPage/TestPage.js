import React from 'react'
import { renderRoutes } from 'react-router-config'

const TestPage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route } = props

  return (
    <div className='test-page' data-testid='test_page'>
      {JSON.stringify(route)}
      <h1>TestPage</h1>
      {renderRoutes(route.routes, { extraProps: { name: '123' } })}
    </div>
  )
}

TestPage.displayName = 'TestPage'

TestPage.whyDidYouRender = true

export default TestPage
