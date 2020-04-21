const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user']
  },
  datas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Data' }]
})

// Before User.save() fires, we will check to see if the password is hashed
// If so, we just skip
// If not we hash the password and set the updated User object to the req object
UserSchema.pre('save', function (next) {
  // prevents hashing an already hashed password
  if (!this.isModified('password')) {
    return next()
  }
  // args: (password, salt, callback)
  bcrypt.hash(this.password, 10, (error, hashedPassword) => {
    if (error) {
      return next(error)
    }
    this.password = hashedPassword
    next()
  })
})

// compare the hash sent by the client with the one stored on the database
UserSchema.methods.comparePassword = async function (password, callback) {
  // args: (password entered via the UI,
  //       hashed password attached to the userSchema in the database,
  //       callback)
  bcrypt.compare(password, this.password, (error, isMatch) => {
    if (error) {
      return callback(error)
    }
    if (!isMatch) {
      return callback(null, isMatch)
    }
    return callback(null, this)
  })
}

module.exports = mongoose.model('User', UserSchema)