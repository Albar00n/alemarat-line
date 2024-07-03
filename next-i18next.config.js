const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['ar', 'en'],
    localePath: path.resolve('./public/locales'),
  },
}
