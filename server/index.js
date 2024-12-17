const express = require('express')
const cors = require('cors')
const app =  express()
const {Productinfo} = require('./routes/productinfo')
const {signIn} = require('./routes/signIn')
const {addToCart} = require('./routes/addToCart')
const {cartItems} = require('./routes/cartItems')
const {deleteFromCart} = require('./routes/deleteFromCart')
const {signUp} = require('./routes/signUp')
// const productinfo = require('./routes/productinfo')

app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    res.json({status : "server is running"})
})

app.use('/signIn', signIn)

app.use('/productInfo', Productinfo)

app.use('/addToCart', addToCart )

app.use('/cartItems', cartItems)

app.use('/delete', deleteFromCart)

app.use('/signUp', signUp)

app.listen(3000);
