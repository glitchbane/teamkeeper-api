var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')

var schema = new Schema({
        authId: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        created: {type: Date, required: true},
        firstName: {type: String},
        lastName: {type: String},
        gcoAlias: {type: String, required: true},
        organizationId: {type: ObjectId, ref: Organization},
        teamId: {type: ObjectId, ref: Team},
        profileId: {type: ObjectId, ref: Profile}
});

schema.plugin(mongooseUniqueValidator);
module.exports = {
    User: mongoose.model('User', schema) // will be used as a collection by mongoose, in the plural
}