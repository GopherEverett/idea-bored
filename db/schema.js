const mongoose = require('./connection');
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    title: {
        type: String,
        default: 'New Title'
    },
    description: {
        type: String,
        default: 'New Description'
    },
    createdOn: {
        type: Date,
        deafult: new Date()
    }
})

const UserSchema = new Schema({
    userName: String,
    password: String,
    ideas: [IdeaSchema]
})

module.exports = {
    IdeaSchema: IdeaSchema,
    UserSchema: UserSchema
}