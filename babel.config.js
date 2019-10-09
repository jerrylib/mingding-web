module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      targets: {
        ie: '9'
      },
      useBuiltIns: 'entry',
      corejs: 3,
      modules: 'auto'
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }]
  ]
}
