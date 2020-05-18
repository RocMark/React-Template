module.exports = function override (config, env) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const overrideConfig = {
    ...config,
    resolve: {
      alias: {
        'react-redux': isDevelopment ? 'react-redux/lib' : 'react-redux'
      }
    }
  }
  return overrideConfig
}
