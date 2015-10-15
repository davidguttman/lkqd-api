# lkqd-api

A simple module for accessing LKQD report data.

## Example ##

```js
var lkqd = require('lqkd-api')

var creds = {
  "key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "secret": "1111111111111111111111111111111111111"
}

var date = '2015-10-10'

lkqd(creds, date, function (err, rows) {
  if (err) return console.error(err)

  console.log('rows', rows)
})

```

# License #

MIT

