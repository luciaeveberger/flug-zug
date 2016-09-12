var User = require('./models/user');
var Donor = require('./models/donor');



module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // need to pass credentials here 
    app.get('/api/get_user', function(req, res) {
        //console.log("on the get user route", req)
        Donor.find(function(err, values) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(values); // return all todos in JSON format
        });
    });



    app.post('/api/create_user', function (req, res) {
       
        // Creates a user with email 
        
        User.create({
            email_address: req.body.email_address
        }, function (err, todo) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            
        });

    });





    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};