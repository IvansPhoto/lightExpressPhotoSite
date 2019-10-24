module.exports = {
	apps : [{
		name: "mainApp",
		script: "./app.js",
		instance: "max",
		exec_mode : "cluster",
		watch: true
	}]
}