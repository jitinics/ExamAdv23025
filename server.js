var express = require('express')
var app = express()
var port = 8080
app.use(express.static(__dirname))
app.listen(process.env.PORT || port, function () {
  console.log(' app listening on port %d!', port)
})
