import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

const App = () => {
  return (
    <div className='App'>
      <h1>App</h1>
      <BrowserRouter>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

App.displayName = 'App'

export default App
