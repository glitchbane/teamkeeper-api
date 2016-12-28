var TeamDataProvider = require('./team.data.js');


module.exports =
    {
        GetTeam: function (req, res, next) {

            TeamDataProvider.getTeam(req.body.param('id'), function (err, team) {
                if (err && err != 'not found') {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });

                }
                if (!team) {
                    return res.status(404).json({
                        title: 'Team not found',
                        error: {message: 'Could not locate a team with that id'}
                    });
                }
                res.status(200).json(
                    team
                );
                next();
            })
        },

        SaveTeam: function (req, res, next) {

            var today = new Date();
            var data = {
                organizationId: req.body.organizationId,
                name: req.body.name,
                description: req.body.description,
                startDate: req.body.startDate,
                disbandedDate: req.body.disbandedDate,
                imageUrl: req.body.imageUrl,
                createdDate: today,
                modifiedDate: today
            };

            TeamDataProvider.createTeam(data,
                function (err, newTeam) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    res.status(200).json(newTeam);
                    next();
            })
        },

        UpdateTeam: function (req, res, next) {
                var id = req.params.id;
                if (id  == null || id == 'null') {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: 'The team id is null'
                    });
                }
                var today = new Date();
                var data = {
                    id: req.body._id,
                    organizationId: req.body.organizationId,
                    name: req.body.name,
                    description: req.body.description,
                    startDate: req.body.startDate,
                    disbandedDate: req.body.disbandedDate,
                    imageUrl: req.body.imageUrl,
                    createdDate: today,
                    modifiedDate: today
                };

                TeamDataProvider.updateTeam(data, function (err, team) {
                    if (err && err == 'not found') {
                        return res.status(404).json({
                            title: 'An error occurred',
                            error: 'The team could not be found'
                        });

                    }

                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });

                    }
                    res.status(200).json(
                        team
                    );
                    next();
                })
            },

        DeleteTeam: function (req, res, next) {
            TeamDataProvider.deleteTeam(req.body.param('id'), function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });

                }
                res.status(200).json({
                    message: 'Team deleted',
                    obj: result
                });
                next();
            })
        },


        GetOrganizationTeams: function (req, res, next) {

            TeamDataProvider.getOrganizationTeams(req.body.param('id'), function (err, teams) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });

                }

                res.status(200).json(
                    teams
                );
                next();
            })
        }
    }