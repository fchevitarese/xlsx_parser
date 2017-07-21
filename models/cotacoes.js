const mongoose = require('mongoose')

const Cotacao = mongoose.model('Cotacao', {
  date: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  price: { type: Number  }
})

module.exports = { Cotacao }
