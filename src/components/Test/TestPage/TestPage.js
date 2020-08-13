import React, { useEffect } from 'react'
import { useExample } from '../../../store/hooks/apis/testHooks'

const TestPage = () => {
  const exampleHook = useExample()

  useEffect(() => {
    exampleHook.api.get()
  }, [])

  return (
    <div className='test-page' data-testid='test_page'>
      <h1>TestPage</h1>
      {JSON.stringify(exampleHook.data)}
    </div>
  )
}

TestPage.displayName = 'TestPage'

TestPage.whyDidYouRender = true

export default TestPage
