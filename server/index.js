const express = require('express')
const cors = require('cors')
const app =  express()
const {Productinfo} = require('./routes/productinfo')
// const productinfo = require('./routes/productinfo')

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json({status : "server is running"})
})


app.use('/productInfo', Productinfo)

app.listen(3000);
