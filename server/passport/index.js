const passport = require('passport')
const LocalStrategy = require('./localStrategy')
// const GoogleStratgey = require('./googleStrategy')
const User = require('../db/models/user')

passport.serializeUser((user, done) => {
	console.log("==== Serialized ====")
	console.log(user) // the whole raw user object!
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, user) => {
			console.log("==== Deserialized ====")
			console.log(user)
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)

module.exports = passport
