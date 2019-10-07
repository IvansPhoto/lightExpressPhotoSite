const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
	res.render('index', {title: 'About Me', pageStyle: 'index'})
})

module.exports = router
