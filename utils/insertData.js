const { Cotacao } = require('../models/cotacoes')
const { generateObjects } = require('./generateObjects')

const insertData = objects => {
  Cotacao.insertMany(generateObjects(objects), function(err, docs) {
    if (err) return console.log(err)
    return docs
  })
}

module.exports = { insertData }
