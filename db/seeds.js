require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Idea = require('../models/Idea')

const mars = new Idea({
    title: 'Fly to Mars',
    description: "Earth isn't Red enough. Let's move to a new planet"
})
const tesla = new Idea({
    title: 'Build a Car',
    description: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})
const elon = new User({
    userName: 'elon_musk',
    password: 'spaceiscool',
    ideas: [mars, tesla]
})

User.remove({})
    .then(() => elon.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
