var get = require('lodash.get')
var jsonist = require('jsonist')

module.exports = function (creds, date, cb) {
  var url = createUrl(creds)
  var opts = getDefaultOpts()
  opts.startDate = date
  opts.endDate = date
  jsonist.post(url, opts, function (err, body, res) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(new Error(['statusCode', res.statusCode, opts.url].join(' ')))
    }

    var errMsg = get(body, 'errors.0.failure')
    if (errMsg) return cb(new Error(errMsg))

    var rows = get(body, 'data.entries')
    cb(null, rows)
  })
}

function createUrl (creds) {
  return ['https://', creds.key, ':', creds.secret, '@api.lkqd.com/reports'].join('')
}

function getDefaultOpts () {
  return {
    timeDimension: 'DAILY',
    reportType: ["SITE","OVERVIEW","OVERVIEW","OVERVIEW"],
    reportFormat: 'JSON',
    timezone: 'UTC'
  }
}
