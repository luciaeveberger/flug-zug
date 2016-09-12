var mongoose = require('mongoose');

module.exports = mongoose.model('Requestor', {
    first_name: {type: String, default:''}, 
    last_name: {type: String, default:''},
    address: {street: {type: String, default:''}, town:{type: String, default:''}, zipcode:{type: String, default:''}}, 
    email_address: {
        type: String,
        default: ''
    }
});
