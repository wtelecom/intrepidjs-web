
/**
 * @file Documentation.js
 * @namespace Documentation model
 * @desc MongoDB Documentation object model
 */


var mongoose = require('mongoose'),
    rek = require('rekuire'),
    moduleSchema = rek('modules/documentation/data/schemas/schema'),
    schema = mongoose.model('Documentation', moduleSchema);

module.exports = schema;
