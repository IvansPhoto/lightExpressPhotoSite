const cluster = require('cluster')
const os = require('os')

if (cluster.isMaster) {
	const CPUs = os.cpus().length
	console.log(`Pid: ${process.pid}`)
	for (let i=0; i < CPUs - 1; i++) cluster.fork()
} else {
	require('./app.js')
}