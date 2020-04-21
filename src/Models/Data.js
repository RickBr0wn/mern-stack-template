const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
  data: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('Data', DataSchema)
