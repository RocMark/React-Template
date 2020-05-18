import React from 'react'

const TestChildPage = (props) => {
  return (
    <div className='test-child-page' data-testid='test_child_page'>
      <h1>TestChildPage</h1>
      {JSON.stringify(props)}
    </div>
  )
}

TestChildPage.displayName = 'TestChildPage'

export default TestChildPage
