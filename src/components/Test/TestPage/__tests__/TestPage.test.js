import React from 'react'
import ReactDOM from 'react-dom'
import TestPage from '../TestPage'

it('TestPage renders without crash', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TestPage />, div)
})
