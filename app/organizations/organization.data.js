var OrganizationModels = require('./organization.models.js');


module.exports = {

    getOrganization: function (id, callback) {
        OrganizationModels.Organization.findById(id, function(err, organization) {
            console.log(organization);
            if (err) {
                callback(err, null);
            }
            if (organization == null|| organization == undefined) {
                callback ('not found', null);
                return;
            }

            callback(null, organization);
        })
    },

    getAllOrganizations: function (callback) {

        OrganizationModels.Organization.find({}, function(err, organizations) {
            if (err) {
                callback(err, null);
            }
            callback(null, organizations);
        })
    },

    updateOrganization: function(id, organizationData, callback) {
        if (id == null || id == undefined) {
            callback ('organization id is null', null);
        }
        OrganizationModels.Organization.findById(id, 
            function (err, organization){
                if (err) {
                    callback(err, null);
                    }
                
                if (!organization){
                    callback ('not found', null);
                    }
                
                organization.userId = organizationData.id;
                organization.name = organizationData.name;
                organization.description = organizationData.description;
                organization.imgPath = organizationData.imgPath;

                organization.save (function (err, result) {
                    if (err) {
                        callback(err, null);
                    }
                        callback(null, result);
                    });
                })
            },

    createOrganization: function(organizationData, callback){

        var organization = new OrganizationModels.Organization({
                user: organizationData.user,
                name: organizationData.name,
                description: organizationData.description,
                imgPath: organizationData.imgPath
            });

        organization.save(function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                callback(null, result)
            }
        })
    },

    deleteOrganization: function(id, callback) {
        if(id == null || id == undefined)
        {
            callback('organization id is null, cannot delete', null);
        }
       OrganizationModels.Organization.findById(id, function (err, organization) {
           if (err) {
               callback(err, null);
           } else {
               organization.remove(function (err, result) {
                   if (err) {
                       callback(err, null);
                   } else {
                       callback(null, result);
                   }
               })
           }
       })
    }

}