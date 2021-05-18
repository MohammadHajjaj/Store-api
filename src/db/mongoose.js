const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Stores-app', {
	userNewUrlPrase: true,
	useCreateIndex: true
})