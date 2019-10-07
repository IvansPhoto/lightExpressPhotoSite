const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000

const mongoConnect = require('./models/mongoConnect')

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))

app.use('/', require('./routes/index'))
app.use('/portraits', require('./routes/portraits'))
app.use('/portraits/', require('./routes/phset'))

app.listen(port, err => {
	console.log(`Listen on ${port}`)
	if(err) console.error(err)
})