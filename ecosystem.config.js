module.exports = {
	apps : [{
		name: "mainApp",
		script: "./app.js",
		instance: -1,
		max_memory_restart: '512M',
		exec_mode : "cluster",
		autorestart: true,
		watch: true
	}]
}