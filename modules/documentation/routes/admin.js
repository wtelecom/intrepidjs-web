/**
 * @file admin.js
 * @namespace Documentation Admin Routes
 * @desc Documentation admin routes
 */

var rek = require('rekuire'),
    m_settings = rek('modules/documentation/settings');

var routes = {};


/**
 * @desc  Parent admin Documentation route
 * @return object - Documentation admin parent page render
 */
routes['/' + m_settings.route_prefix + '/admin/parent'] =  {
    methods: ['get'],
    middleware: [],
    fn: function(req, res, next) {
        res.render(m_settings.viewsPath + 'admin/parent');
    }
};


module.exports = routes;

