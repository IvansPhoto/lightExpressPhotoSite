const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/photoSite'

module.exports = connectDB = mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
	.then((e) => console.log(`Connected to ${e.connections[0].host}:${e.connections[0].port}`))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})