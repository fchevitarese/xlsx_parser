const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://cotacoesadmin:cotacoesadmin123@ds115583.mlab.com:15583/cotacoes')
module.exports = {mongoose}
