var express = require('express');
var teamRouter = express.Router();

var TeamHandler = require('/team.handler');

// these routes are prepended with api/team/

// get a team by its id
teamRouter.get('/:id', TeamHandler.GetTeam);

// save a team
teamRouter.post('', TeamHandler.SaveTeam);

// update a team
teamRouter.patch('/:id', TeamHandler.UpdateTeam);

// delete a team
teamRouter.delete('/:id', TeamHandler.DeleteTeam);

module.exports = teamRouter;