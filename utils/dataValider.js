const moment = require('moment')

const validateData = (date) => {
  return moment(date).isValid()
}

module.exports = { validateData }
