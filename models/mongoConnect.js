const mongoose = require('mongoose')
const config = require('config')
const mongoUrl = config.get('mongoUrl')

module.exports = connectDB = mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
	.then((e) => console.log(`Connected to ${e.connections[0].host}:${e.connections[0].port}`))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})