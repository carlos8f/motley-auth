module.exports = {
  _ns: 'motley',

  'middleware.auth': require('./auth'),
  'middleware[-20]': '#middleware.auth'
}