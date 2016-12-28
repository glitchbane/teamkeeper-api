
var UserDataProvider = require('./user.data');

module.exports = {
    
    SaveUser: function(req, res) {
        var now = new Date();
        var data = {
            authId: req.body.authId,
            email: req.body.email,
            created: now,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gcoAlias: req.body.gcoAlias,
            organizationId: req.body.organiztionId,
            teamId: req.body.teamId,
            profileId: req.body.profileId
        };
        
        UserDataProvider.createUser(data, function(err, result) {

            if (err) {
                return res.status(500).json({
                    title:'An error occurred',
                    error: err
                })
            }
            res.status(201).json(
                result
            );
        });
    },

    LogUserIn: function(req, res, next) {

        UserDataProvider.getLoggedInUser(req.body.gcoAlias, function(err, user){
            if(err) {
                return res.status(500).json({
                    title:'An error occurred',
                    error: err
                });

            }
            if (!user) {
                return res.status(401).json({
                    title:'Login failed',
                    error: {message:'Invalid login credentials'}
                });
            }
            res.status(200).json(
                user
            );
            next();
        })
    },

    LogUserOut: function(req, res) {
        UserDataProvider.logOutUser(req.body.gcoAlias, function(err, user){
            if(err) {
                return res.status(500).json({
                    title:'An error occurred',
                    error: err
                });

            }
            if (!user) {
                return res.status(401).json({
                    title:'Login failed',
                    error: {message:'Invalid login credentials'}
                });
            }
            res.status(200).json(
                user
            );
        })
    },

}