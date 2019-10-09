const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const photosModel = require('./../models/photosModel')


router.get('/', async (req, res) => {
	try {
		const photos = await photosModel.find({})
		res.render('portraits', {title: 'Portraits', pageStyle: 'portraits', photos: photos, metaTags: "portraits, girls, photos"})
	} catch (e) {
		console.error(e)
		res.redirect('/')
	}
})

module.exports = router
