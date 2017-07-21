const XLSX = require('xlsx')
const babyParser = require('babyparse')
const { cleanData } = require('./utils/dataCleaner')
const { validateData } = require('./utils/dataValider')
const { Cotacao } = require('./models/cotacoes')


let workbook = XLSX.readFile('./Cotacoes_2017.xlsx')

// Todo: Parse all sheets.
// Todo: in the server only receive the upload
let csv_data = XLSX.utils.sheet_to_csv(workbook.Sheets['JaneiroBoi'])
let parsed = babyParser.parse(cleanData(csv_data), { header: true, skipEmptyLines: true })
let cityList = [
  'T.Lagoas',
  'C.Grande',
  'Dourados',
  'Bataguassu',
  'Cuiaba',
  'Goiania',
  'R.Verde',
  'Oeste BA',
  'Araçatuba',
]

parsed.data.forEach( (item) => {
  if (item.date !== '' && validateData(item.date)) {
    cityList.forEach( (city) => {
      let cotacao = new Cotacao({
        date: item.date,
        city: city,
        price: item[city]
      })
      cotacao.save().then(
        (doc) => {
          console.log(`Object saved ${doc}`)
        },
        (err) => console.log(err)
      )
    })
  }
})

