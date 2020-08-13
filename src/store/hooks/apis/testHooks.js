import { useDispatch, useSelector } from 'react-redux'
import { actions as testActions } from '../../reducers/Test/testReducer'

const useExample = () => {
  const dispatch = useDispatch()
  const example_API = (data) => dispatch(testActions.example_AC(data))
  const exampleState = useSelector((store) => store.testState.exampleState)

  return {
    api: {
      get: example_API
    },
    data: exampleState
  }
}

export { useExample }
