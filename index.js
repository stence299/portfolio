const express = require('express')
const app = express()

const port = 3003

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log("Portfolio is running")
})