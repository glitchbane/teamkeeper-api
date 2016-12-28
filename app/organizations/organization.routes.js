var express = require('express');
var organizationRouter = express.Router();

var OrganizationHandler = require('/organization.handler');
var TeamHandler = require('./team.handler');


// these routes are prepended with api/organization/

// get all organizations
organizationRouter.get('', OrganizationHandler.GetAllOrganizations);

// get a organization by its id
organizationRouter.get('/:id', OrganizationHandler.GetOrganization);

// get the teams in the organization
organizationRouter.get('/:id/teams', TeamHandler.GetOrganizationTeams);

// save an organization
organizationRouter.post('', OrganizationHandler.SaveOrganization);

// update a organization
organizationRouter.patch('/:id', OrganizationHandler.UpdateOrganization);

// delete a organization
organizationRouter.delete('/:id', OrganizationHandler.DeleteOrganization);

module.exports = organizationRouter;