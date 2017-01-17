var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')
var OrgModels = require('../organizations/organization.models');
var TeamModels = require('../teams/team.models');
var schema = new Schema({
        authId: {type: String, required: true, unique: true},
        firstName: {type: String},
        lastName: {type: String},
        gcoAlias: {type: String, required: true},
        organizationId: {type: Schema.Types.ObjectId, ref: OrgModels.Organization},
        teamId: {type: Schema.Types.ObjectId, ref: TeamModels.Team},
        profileId: {type: Schema.Types.ObjectId},
        createdDate: {type: Date, required: true},
        modifiedDate: {type: Date, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = {
    User: mongoose.model('User', schema) // will be used as a collection by mongoose, in the plural
}