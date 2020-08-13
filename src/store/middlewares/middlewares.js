// import dayjs from 'dayjs'

const example_MW = (store) => (next) => (action) => {
  // const currentTime = new Date()
  // console.log('action', action.type, dayjs(currentTime).format('HH:mm:ss'))

  if (action.type === 'EXAMPLE_STR') {
    // console.log('example_MW')
  }
  return next(action)
}

export default [example_MW]
