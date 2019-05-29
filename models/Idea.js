const { IdeaSchema } = require('../db/schema')
const mongoose = require('../db/connection.js')
//
module.exports = mongoose.model('Idea', IdeaSchema)
