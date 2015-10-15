var lkqd = require('../')

var creds = require('./creds.json')

var date = '2015-10-10'

lkqd(creds, date, function (err, rows) {
  if (err) return console.error(err)

  console.log('rows', rows)
})
