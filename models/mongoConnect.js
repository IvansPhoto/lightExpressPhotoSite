const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://superUser:Super@cluster0-e0orb.mongodb.net/photoSite?retryWrites=true&w=majority'

module.exports = connectDB = mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
	.then((e) => console.log(`Connected to ${e.connections[0].host}:${e.connections[0].port}`))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})