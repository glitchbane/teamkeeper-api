var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator')
var Schema = mongoose.Schema;


var teamSchema = new Schema({
    id: {type: Schema.Types.ObjectId},
    organiztionId: {type: Schema.Types.ObjectId, ref: 'Organization'},
    name: {type: Schema.Types.String, required: true},
    description: {type: Schema.Types.String},
    startDate: {type: Date},
    disbandedDate: {type: Date},
    imageUrl: {type: Schema.Types.String},
    createdDate: {type: Date},
    modifiedDate: {type: Date}

})

teamSchema.plugin(mongooseUniqueValidator);

module.exports =
    {
        Team: mongoose.model('Team', teamSchema)
    }