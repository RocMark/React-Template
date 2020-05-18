// ------------------------------------
// Import
// ------------------------------------

import axios from 'axios'
import testLib from '../../interceptors/interceptors'
import actionNames from '../constant/actionNames'

// ! 至 modules/allReducer.js 新增 State 名 & 修改路徑
// import {{camelCase name}}Reducer from '{{camelCase name}}Reducer'
// import { responseFail_A } from 'loginReducer'

// ------------------------------------
// Interceptor
// ------------------------------------

const apiName = 'exampleRequest'
const exampleRequest = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_API_URL,
})

testLib.generateInterceptorFunc({ apiRequest: exampleRequest, apiName })

// ------------------------------------
// Constants
// ------------------------------------

const { EXAMPLE_STR } = actionNames

// ------------------------------------
// Action initialState
// ------------------------------------

const initialState = {
}

// ------------------------------------
// Action Creator ( async, expose to components )
// Action ( sync expose to components)
// ------------------------------------

export const example_AC = (data) => {
  const reqData = {}

  return (dispatch) => {
    const url = ''

    exampleRequest
      .get(url)
      .then((res) => {
        dispatch(example_A(res.data.success.data[0]))
      })
      .catch((error) => {
        console.error(`example_AC${error}`)
      })
  }
}

export const example_A = (data) => {
  return {
    type: EXAMPLE_STR,
    data,
  }
}

// ****************************************************************

// ------------------------------------
// Actions & ActionCreators 統合輸出
// ------------------------------------

export const actions = {
  example_AC,
}

// ------------------------------------
// Reducer (expose to index.js )
// ------------------------------------
const {{camelCase name}}Reducer = (state = initialState, action) => {

  switch (action.type) {
    case EXAMPLE_STR:
      return {
        ...state,
        ...action.data,
      }

    default:
      return state
  }
}

export default {{camelCase name}}Reducer
