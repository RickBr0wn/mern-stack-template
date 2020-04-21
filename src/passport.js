const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const User = require('./Models/User')

const cookieExtractor = function (req) {
  let token = null
  if (req && req.cookies) {
    token = req.cookies['access_token']
  }
  return token
}

// middleware for authenticating routes in the front end
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) {
          return done(err, false)
        }
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
    }
  )
)

// middleware for authenticating local strategy using username & password
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      // something went wrong with the database
      if (err) {
        return done(err)
      }
      // no user exists
      if (!user) {
        return done(null, false)
      }
      // the user has been found, so check password
      user.comparePassword(password, done)
    })
  })
)
