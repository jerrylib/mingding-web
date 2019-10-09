module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-calc')(),
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: [
        "last 2 version",
        "> 1%",
        "ie 9"
      ]
    })
  ]
}
