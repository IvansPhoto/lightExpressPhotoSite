const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	folder: {
		type: String,
		required: false,
	},
	type: {
		type: String,
		required: true
	},
	LightDark: {
		type: Boolean,
		required: true
	},
	metaTags: {
		type: String,
		required: true,
		default: 'photography'
	},
	description: {
		type: String,
		required: false
	},
	photos: {
		type: Array,
		required: true,
		default: []
	},
})

module.exports = dbPhotos = mongoose.model('photos', photosSchema)