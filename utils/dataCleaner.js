const normalizeHeader = header => {
  const tmpHeader = header.split(',')
  let tmp = []
  tmpHeader.forEach( elem => {
    if (tmp.includes(elem)) elem = `${elem}_vaca`
    tmp.push(elem)
  });
  return tmp
}

const cleanData = data => {
  data = data.split('\n')
  let tmpdata = ''
  const iterator = data.entries()
  for (let row of iterator) {
    if (row[0] <= 3 || row[0] == 5) continue

    if (row[0] === 4) {
      row[1] = normalizeHeader(`date${row[1]}`)
    }
    tmpdata += `${row[1]}\n`
  }
  return tmpdata
}

module.exports = { cleanData }
