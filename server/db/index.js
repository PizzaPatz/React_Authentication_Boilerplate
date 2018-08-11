const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://<username>:<password>@<url>:<url_num>/<database_name>';

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
	MONGO_URL = process.env.MONGODB_URI
} else {
	mongoose.connect(MONGO_LOCAL_URL) // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

// mongoose connection
const db = mongoose.connection
db.on('error', err => {
	console.log(`====Connection Failed====${err}`)
})
db.once('open', () => {
	console.log(
		`====Connection Success====${MONGO_URL}`
	)
})

module.exports = db
