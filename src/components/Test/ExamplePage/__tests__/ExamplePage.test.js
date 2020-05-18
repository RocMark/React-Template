import React from 'react'
import ReactDOM from 'react-dom'
import ExamplePage from '../ExamplePage'

it('ExamplePage renders without crash', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ExamplePage />, div)
})
