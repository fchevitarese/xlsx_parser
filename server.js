const XLSX = require('xlsx')
const babyParser = require('babyparse')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const mongoose = require('mongoose')

const { cleanData } = require('./utils/dataCleaner')
const { Cotacao } = require('./models/cotacoes')
const { insertData } = require('./utils/insertData')
const { sheetList } = require('./utils/workbooks')
const { generateObjects } = require('./utils/generateObjects')


const app = express()
app.use(bodyParser.json())

mongoose.Promise = global.Promise
mongoose.connect('mongodb://cotacoesadmin:cotacoesadmin123@ds115583.mlab.com:15583/cotacoes')


// TODO: Receive the file from an upload or lambda s3 function.
const workbook = XLSX.readFile('./hoje.xlsx')

sheetList.map( sheet => {
  const obj = cleanData(XLSX.utils.sheet_to_csv(workbook.Sheets[sheet]))
  const parsed = babyParser.parse(obj, { header: true, skipEmptyLines: true })
  insertData(parsed)
})
