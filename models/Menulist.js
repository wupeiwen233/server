const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {type:String},
  data: {type:String}
})


module.exports = mongoose.model('Menulist', schema)
