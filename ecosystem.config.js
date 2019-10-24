module.exports = {
	apps : [{
		name: "mainApp",
		script: "./app.js",
		instance: "max",
		max_memory_restart: '512M',
		exec_mode : "cluster",
		autorestart: true,
		watch: true
	}]
}