const JWT = require('jsonwebtoken')
const User = require('../Models/User')
const Data = require('../Models/Data')

const signToken = userID =>
  JWT.sign({ iss: 'RickBrown', sub: userID }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })

exports.test = (req, res) => res.status(200).json({ 'end-point': '/auth/test' })

exports.register = (req, res) => {
  const { username, password, role } = req.body
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: { msgBody: 'An error has occurred.', msgError: true },
      })
    }
    if (user) {
      return res.status(400).json({
        message: {
          msgBody: 'Username has already been taken.',
          msgError: true,
        },
      })
    }
    const newUser = new User({ username, password, role })
    newUser.save(err => {
      if (err) {
        return res.status(500).json({
          message: {
            msgBody: 'An error has occurred whilst saving the user.',
            msgError: true,
          },
        })
      }
      return res.status(201).json({
        message: {
          msgBody: 'Account created successfully.',
          msgError: false,
        },
      })
    })
  })
}

exports.login = (req, res) => {
  if (req.isAuthenticated()) {
    console.log('server-side login')
    const { _id, username, role } = req.user
    const token = signToken(_id)
    res.cookie('access_token', token, { httpOnly: true, sameSite: true })
    return res
      .status(200)
      .json({ isAuthenticated: true, user: { username, role } })
  }
}

exports.logout = (req, res) => {
  res.clearCookie('access_token')
  return res
    .status(200)
    .json({ user: { username: '', role: '' }, success: true })
}

exports.authenticated = (req, res) => {
  const { username, role } = req.user
  return res
    .status(200)
    .json({ isAuthenticated: true, user: { username, role } })
}

exports.admin = (req, res) => {
  if (req.user.role === 'admin') {
    return res
      .status(200)
      .json({ message: { msgBody: 'You are an admin', msgError: false } })
  }
}

exports.creates_a_data = (req, res) => {
  const data = new Data(req.body)
  data.save(err => {
    if (err) {
      return res.status(500).json({
        message: {
          msgBody: 'An error has occurred with the datas.',
          msgError: true,
        },
      })
    }
    req.user.datas.push(data)
    req.user.save(err => {
      if (err) {
        return res.status(500).json({
          message: {
            msgBody: 'An error has occurred when saving the new data.',
            msgError: true,
          },
        })
      }
      return res.status(200).json({
        message: { msgBody: 'Successfully created data', msgError: false },
      })
    })
  })
}

exports.get_all_datas = (req, res) => {
  User.findById({ _id: req.user._id })
    .populate('datas')
    .exec((err, doc) => {
      if (err) {
        return res.status(500).json({
          message: {
            msgBody:
              'An error has occurred whilst populating the `user` data array.',
            msgError: true,
          },
        })
      }
      return res.status(200).json({ datas: doc.datas, authenticated: true })
    })
}
