const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const photosModel = require('./../models/photosModel')


router.get('/:folder', async (req, res) => {
	const {folder} = req.params
	try {
		const photoSet = await photosModel.findOne({ folder: folder})
		res.render('phset', {title: folder, pageStyle: 'phset', photoSet, metaTags: photoSet.metaTags, pageScript: "gallery"})
	} catch (e) {
		console.error(e)
		res.redirect('/')
	}
})

module.exports = router
