
var TeamModels = require('./team.models.js');


module.exports = {

    getTeam: function (teamId, callback) {

        TeamModels.Team.findById(teamId, function(err, team) {

            if (err) {

                callback(err, null);
            }

            if (team == null || team == undefined) {

                callback ('not found', null);
                return;
            }

            callback(null, team);
        })
    },

    createTeam: function (teamData, callback) {

        var team = new TeamModels.Team({
            organizationId: teamData.organizationId,
            name: teamData.name,
            description: teamData.description,
            startDate: teamData.startDate,
            disbandedDate: teamData.disbandedDate,
            imageUrl: teamData.imageUrl,
            createdDate: teamData.createdDate,
            modifiedDate: teamData.modifiedDate
        });

        team.save(function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                callback(null, result)
            }
        })
    },

    updateTeam: function (teamData, callback) {
        var team = new TeamModels.Team({
            id: teamData._id,
            organizationId: teamData.organizationId,
            name: teamData.name,
            description: teamData.description,
            startDate: teamData.startDate,
            disbandedDate: teamData.disbandedDate,
            imageUrl: teamData.imageUrl,
            createdDate: teamData.createdDate,
            modifiedDate: teamData.modifiedDate
        });

        TeamModels.Team.findById(team.id,
            function (err, team){
                if (err) {
                    callback(err, null);
                }

                if (!team){
                    callback ('not found', null);
                }

                team.save (function (err, result) {
                    if (err) {
                        callback(err, null);
                    }
                    callback(null, result);
                });
            })
    },

    deleteTeam: function (teamId, callback) {
        if(teamId == null || teamId == undefined)
        {
            callback('team id is null, cannot delete', null);
        }
        TeamModels.Team.findById(teamId, function (err, team) {
            if (err) {
                callback(err, null);
            } else {
                team.remove(function (err, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, result);
                    }
                })
            }
        })
    },


    getOrganizationTeams: function (organizationId, callback) {

        if(organizationId == null || organizationId == undefined) {

            callback('organization id is null, cannot find teams for a null organization', null);
        }

        TeamModels.Team.find({"organizationId": organizationId}, function(err, teams) {

            if (err) {
                callback(err, null);
            }
            callback(null, teams);
        })
    }

}