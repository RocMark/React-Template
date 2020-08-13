// ------------------------------------
// Import
// ------------------------------------

import axios from 'axios'
import actionNames from '../../constant/actionNames'
// import testLib from '../../interceptors/interceptors'

// ! 至 modules/allReducer.js 新增 State 名 & 修改路徑
// import userReducer from 'userReducer'
// import { responseFail_A } from 'loginReducer'

// ------------------------------------
// Interceptor
// ------------------------------------

const apiName = 'testRequest'
const request = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_API_URL
})

// testLib.generateInterceptorFunc({ apiRequest: testRequest, apiName })

// ------------------------------------
// Constants
// ------------------------------------

const { EXAMPLE_STR } = actionNames

// ------------------------------------
// Note
// ------------------------------------

// ! 需要至 modules/allReducer.js 新增 State 名
// import testReducer from 'testReducer'

// ? 元件內使用
// import { actions as xxxActions } from 'testReducer'
// const dispatch = useDispatch()
// const rechargeData_API = (data) => dispatch(xxxActions.xxx_AC(data))

// ------------------------------------
// Config & Headers
// ------------------------------------

export const exampleRequest = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_API_URL
})

// ------------------------------------
// Interceptor
// ------------------------------------

// const apiName = 'exampleRequest'
// GenerateInterceptorFunc({ apiRequest: exampleRequest, apiName })

// ------------------------------------
// Action initialState
// ------------------------------------

const initialState = {
  exampleState: {},
  testPersist: 'testPersist'
}

// ------------------------------------
// Action Creator ( async, expose to components )
// Action ( sync expose to components)
// ------------------------------------

// ****************************************************************

export const example_AC = (data) => {
  return (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    axios.get(url)
      .then((res) => {
        const resData = res.data
        dispatch(example_A(resData))
      })
      .catch((error) => { console.error(error) })
  }
}

export const example_A = (data) => {
  return {
    type: EXAMPLE_STR,
    data
  }
}

// ------------------------------------
// Actions & ActionCreators 統合輸出
// ------------------------------------

export const actions = {
  example_AC
}

// ------------------------------------
// Reducer (expose to index.js )
// ------------------------------------
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_STR:
      return {
        ...state,
        exampleState: action.data
      }
    default:
      return state
  }
}

export default testReducer
