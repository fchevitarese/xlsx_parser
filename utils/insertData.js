const { Cotacao } = require('../models/cotacoes')
const { generateObjects } = require('./generateObjects')
const moment = require('moment')

const insertData = objects => {
  Cotacao.remove({}).exec() // Limpa collection

  let docs = generateObjects(objects.data)
  const obj = docs.filter((elem) => {
    elem.originalDate = elem.date;
    elem.date = moment(elem.date).format();
    if (elem.price > 0) return elem.price;
  })

  Cotacao.insertMany(obj, function(err, data) {
    if (err) return console.log(err)
    return data
  })
}

module.exports = { insertData }
