const express = require('express')
const createError = require('http-errors')
const hbs = require('hbs')
const path = require('path')
const compression = require('compression')
const helmet = require('helmet')
const app = express()
const PORT = process.env.PORT || 3001

const mongoConnect = require('./models/mongoConnect')

//Helmet protection
app.use(helmet())

//Compression, but it doesn't compress.
app.use(compression({ threshold: 0 }))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.set('layout', 'layouts/layout')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(path.join(__dirname, 'public')))


// html-minifier
app.use((req, res, next) => {
	const render = res.render
	res.render = function (view, in_options, fn) {
		let self = this
		let options = in_options || {};
		const req = this.req
		let defaultFn

		if (typeof options == 'function') {
			fn = options
			options = {}
		}
		defaultFn = (err, str) => {
			if (err) return req.next(err)
			self.send(str)
		}
		if(typeof fn != 'function') fn = defaultFn

		render.call(self, view, options, (err, html) => {
			const minify = require('html-minifier').minify
			let result = html
			try { result = minify(html, {removeAttributeQuotes: true,	minifyCSS: true, collapseWhitespace: true} )}
			catch (e) { console.log(e) }
			fn(err, result)
		})
	}
	next()
})


app.use('/', require('./routes/index'))
app.use('/portraits', require('./routes/portraits'))
app.use('/portraits/', require('./routes/phset'))



// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

app.listen(PORT, err => {
	console.log(`Listen on ${PORT}`)
	if(err) console.error(err)
})













