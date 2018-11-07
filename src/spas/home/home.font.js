const BUNDLE_HELPER = require('../../utils')

module.exports = {
    files: [
      './icons/beer.svg',
      './icons/play.svg'
    ],
    fileName: BUNDLE_HELPER.path(__dirname) + '/fonts.[ext]'
  }