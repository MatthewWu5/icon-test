module.exports = {
  files: ['./assets/*.svg'],
  fontName: 'iconFonts',
  classPrefix: 'igus-icon-',
  types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  cssTemplate: './icons.template.hbs',
  fileName: 'icon-font/[fontname].[contenthash:8].[ext]',
  emitCodepoints: '[fontname].codepoints.js'
};
