const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001

const mongoConnect = require('./models/mongoConnect')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.set('layout', 'layouts/layout')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
app.use('/portraits', require('./routes/portraits'))
app.use('/portraits/', require('./routes/phset'))

app.listen(PORT, err => {
	console.log(`Listen on ${PORT}`)
	if(err) console.error(err)
})