module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // 'react-hot-loader/babel',
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
}
