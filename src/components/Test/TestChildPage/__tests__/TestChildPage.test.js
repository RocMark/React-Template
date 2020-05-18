import React from 'react'
import ReactDOM from 'react-dom'
import TestChildPage from '../TestChildPage'

it('TestChildPage renders without crash', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TestChildPage />, div)
})
