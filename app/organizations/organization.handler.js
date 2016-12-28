var OrganizationDataProvider = require('./organization.data.js');


module.exports =
{
    GetOrganization: function (req, res) {
        OrganizationDataProvider.getOrganization(req.params.id, function (err, data) {
            if (err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    SaveOrganization: function (req, res) {
        var data = {
            user: req.body.user,
            name: req.body.name,
            description: req.body.description,
            imgPath: req.body.imgPath
        };

        OrganizationDataProvider.createOrganization(data,
            function (err, newOrganization) {
                if (err) {
                    return res.json(err);
                } else
                {
                    res.json(newOrganization);
                }

        })
    },

    UpdateOrganization: function (req, res) {
        var id = req.params.id;
        if (id  == null || id == 'null') {
            res.json('id is null');
            return;
        }
        var data = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            imgPath: req.body.imgPath
        };
        OrganizationDataProvider.updateOrganization(id, data, 
            function (err, updatedOrganization) {
                if (err) {
                    return res.json(err);
                }
                res.json(updatedOrganization);
            })
        },

    DeleteOrganization: function(req, res) {
        var id = req.params.id;

        OrganizationDataProvider.deleteOrganization(id,
            function(err, result) {
                if(err) {
                    return res.json(err);
                }
                res.json(result);
            })
        },

    GetAllOrganizations: function(req, res) {
        OrganizationDataProvider.getAllOrganizations(
            function(err, result) {
                if(err) {
                    return res.json(err);
                }
                res.json(result);
            }
        )
    }
}