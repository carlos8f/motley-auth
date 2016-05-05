module.exports = function container (get, set) {
  return function auth (req, res, next) {
    if (!req.session) return next(new Error('auth requires session'))
    req.login = function (user) {
      req.user = user
      req.session.auth = user.id
    };
    req.logout = function () {
      req.user = null
      delete req.session.auth
    };
    if (req.session.auth) {
      get('conf.middleware.auth.users').load(req.session.auth, function (err, user) {
        if (err) return next(err)
        if (user) req.login(user)
        else req.logout()
        next()
      })
    }
    else next()
  }
}