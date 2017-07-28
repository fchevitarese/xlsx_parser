const { validateData } = require('./dataValider')
const { cityList } = require('./cityList')

const generateObjects = (parsed) => {
  const result = [];
  parsed.map( elem => {
    if (elem.date !== '' && validateData(elem.date)) {
      cityList.map( city => {
        let animalType = city.split('_').length > 1 ? 'Vaca' : 'Boi'
        const cityname = city.split('_')[0]

        if (elem[city] > 0) {
          result.push({ date: elem.date, city: cityname, price: parseFloat(elem[city]) || 0, animalType })
        }
      })
    }
  })
  return result
}

module.exports = { generateObjects }
