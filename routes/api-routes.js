var db = require('../models');

module.exports = function(app) {
    app.post('/api/pw', function(req, res) {
        db.Pw.create({
            service: req.body.service,
            email: req.body.email,
            password: req.body.password,
            additional: req.body.additional
        }).then(function(result) {
            res.send(result);
        });
    });

    app.get('/api/pw/service/:service', function(req, res) {
        console.log(req.params.service);
        if (req.params.service) {
            db.Pw.findAll({
                where: {
                    service: req.params.service
                }
            }).then(function(results) {
                res.json(results);
            });
        }
        
    });

    app.put('api/pw/', function(req, res) {
        db.Pw.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            res.json(result);
        });
    });
}