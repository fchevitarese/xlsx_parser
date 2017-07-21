const mongoose = require('mongoose')

const Cotacao = mongoose.model('Cotacao', {
  date: { type: String, trim: true },
  city: { type: String, trim: true },
  price: { type: String },
  animalType: { type: String, default: 'Boi'},
})

module.exports = { Cotacao }
