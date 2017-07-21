const moment = require('moment')

const validateData = (date) => {
  console.log()
  return moment(date).isValid()
}

module.exports = { validateData }
