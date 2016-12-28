var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator')
var Schema = mongoose.Schema;

var organizationSchema = new Schema({
        id: {type: Schema.Types.ObjectId},
        name: {type: String, required: true},
        created: {type: Date},
        modified: {type: Date}
})

organizationSchema.plugin(mongooseUniqueValidator);

module.exports =
{
        Organization: mongoose.model('Organization', organizationSchema)
}