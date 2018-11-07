module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'SortSettings',
      externals: {
        react: 'React'
      }
    }
  }
}
