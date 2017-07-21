const { validateData } = require('./dataValider')
const { cityList } = require('./cityList')

const generateObjects = (parsed) => {
  const result = [];
  parsed.data.map( elem => {
    if (elem.date !== '' && validateData(elem.date)) {
      cityList.map( city => {
        let animalType = city.split('_').length > 1 ? 'Vaca' : 'Boi'
        city = city.split('_')[0]
        result.push({ date: elem.date, city, price: parseFloat(elem[city]) || 0, animalType })
      })
    }
  })
  return result
}

module.exports = { generateObjects }
