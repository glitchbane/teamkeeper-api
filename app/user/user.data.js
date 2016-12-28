var UserModels = require('./user.models');

module.exports = {

        createUser: function(userData, callback){

            var user = new UserModels.User({
                authId: userData.authId,
                email: userData.email,
                created: userData.created,
                firstName: userData.firstName,
                lastName: userData.lastName,
                gcoAlias: userData.gcoAlias,
                organizationId: userData.organizationId,
                teamId: userData.teamId,
                profileId: userData.profileId
            });

            user.save(function(err, result) {
                if (err) {
                    return callback(err, null);
                }
                callback(null, result);
            })
        },

    getUser: function(email, callback) {
        User.findOne({gcoAlias: gcoAlias}, function(err, user){
            if (err) {
                return callback(err, null);
            }
            callback(null, user);
        })
    },

    getLoggedInUser: function(email, callback) {
        UserModels.User.findOne({gcoAlias: gcoAlias}, function(err, user){
            if (err) {
                return callback(err, null);
            }
            callback(null, user);
        })
    }, 

    logOutUser: function(email, callback) {
        UserModels.User.findOne({gcoAlias: gcoAlias}, function(err, user){
            if (err) {
                return callback(err, null);
            }
            callback(null, user);
        })
    }


}