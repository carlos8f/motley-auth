module.exports = {
  _ns: 'motley',
  _folder: 'middleware',

  'auth': require('./auth'),
  'handlers[-20]': '#middleware.auth'
}