const CONST = 'CONST'
const ACTION_NAME = 'ACTION_NAME'
const STATE_NAME = 'STATE_NAME'
const REDUCER_NAME = 'REDUCER_NAME'

// * CONST            貼至 import
// * ACTION_NAME_AC   貼至 export

// ****************************************************************

export const ACTION_NAME_AC = (data) => {
  // const reqData = {}
  // const url = `/${reqData.id}`
  const url = ''
  return (dispatch) => {
    // REDUCER_NAMERequest
    dispatch(ACTION_NAME_A(data))
  }
}

export const ACTION_NAME_A = (data) => {
  return {
    type: CONST,
    data,
  }
}

STATE_NAME: {},
ACTION_NAME_AC,

case CONST:
  return {
    ...state,
    STATE_NAME: action.data,
  }

const useACTION_NAME = () => {
  const dispatch = useDispatch()
  const ACTION_NAME_API = (data) => dispatch(REDUCER_NAMEActions.ACTION_NAME_AC(data))
  const STATE_NAME = useSelector((store) => store.REDUCER_NAMEState.STATE_NAME)

  useEffect(() => {
    ACTION_NAME_API()
  }, [])

  return {
    api: {
      get: ACTION_NAME_API,
    },
    data: STATE_NAME,
  }
}
