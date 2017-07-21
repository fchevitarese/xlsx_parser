const XLSX = require('xlsx')
const babyParser = require('babyparse')
const { cleanData } = require('./utils/dataCleaner')

const { Cotacao } = require('./models/cotacoes')
const { insertData } = require('./utils/insertData')

const { sheetList } = require('./utils/workbooks')
const { generateObjects } = require('./utils/generateObjects')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://cotacoesadmin:cotacoesadmin123@ds115583.mlab.com:15583/cotacoes')


// TODO: Receive the file from an upload or lambda s3 function.
const workbook = XLSX.readFile('./Cotacoes_2017.xlsx')

const parsed = sheetList.forEach( (sheet) => {
  return insertData(babyParser.parse(cleanData(XLSX.utils.sheet_to_csv(workbook.Sheets[sheet])),
    { header: true, skipEmptyLines: true }))
})

console.log(parsed)

