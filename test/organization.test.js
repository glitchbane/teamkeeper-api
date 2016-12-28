process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const mongoose = require("mongoose");
const TeamSchemas = require('../app/Teams/Team.models');

const server = require('../server');

describe('Teams', function () {

    var team = TeamSchemas.Team;

    beforeEach( function(done)  {

        team.remove({}, function(err)  {
            done();
        });
    });

    xdescribe('GET all organizations', function() {

        xit('should successfully return an empty array when there are no organizations', function() {

            // done();
            var id = ""; // Organization id

            chai.request(server)
                .get('/api/organization/')
                .end(function(err, res)  {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });

        xit('should return all of the Teams when any exist for the organization', function(done) {

            var Organization1 = new OrganizationSchemas.Organization(
                {
                    user: null,
                    name: "Voyager",
                    description: "Voyager and Voyager Flights",
                    imgPath: ""
                });

            var Organization2 = new OrganizationSchemas.Organization(
                {
                    _id: null,
                    user: null,
                    name: "VCI",
                    description: "Voice and Communications Interfaces",
                    imgPath: ""
                });

            Organization1.save(function(err, Organization) {
                if(!err) {
                    Organization2.save( function(err, Organization) {
                        chai.request(server)
                            .get('/api/Organization')
                            .end(function(err, res)  {
                                res.should.have.status(200);
                                res.body.should.be.a('array');
                                res.body.length.should.be.eql(2);
                                done();
                            });
                    })
                }
            })

        });
    });


});