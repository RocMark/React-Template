import { combineReducers } from 'redux'

import testReducer from './Test/testReducer'

const allReducer = combineReducers({
  testState: testReducer
})

export default allReducer
