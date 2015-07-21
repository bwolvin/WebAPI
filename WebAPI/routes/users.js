/*
 * GET users listing.
 */

var mongoose = require('mongoose');

 //Schema
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    skill: String
});

//Model
var UserModel = mongoose.model( 'User', UserSchema, 'users' );

exports.list = function(req, res, next){
    return UserModel.find(function( err, users ) {
        if( !err ) {
            return res.json( users );
        } else {
            console.log( err );
            return res.send('ERROR');
        }
    });
};