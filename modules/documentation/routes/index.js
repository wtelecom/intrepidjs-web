/**
 * @file index.js
 * @namespace Documentation Routes
 * @desc Documentation routes
 */

var _ = require('underscore'),
    rek = require('rekuire'),
    m_settings = rek('modules/documentation/settings');


var routes = {};


/**
 * @desc  Main Documentation route
 * @return object - Documentation main page render
 */
routes['/' + m_settings.route_prefix] =  {
    methods: ['get'],
    middleware: [],
    fn: function(req, res, next) {
        res.render(m_settings.viewsPath + 'index');
    }
};

/**
 * @desc  Documentation partial route
 * @return object - Documentation partial render
 */
routes['/' + m_settings.route_prefix + '/partials/:name'] =  {
    methods: ['get'],
    middleware: [],
    fn: function(req, res, next) {
        var name = req.params.name;
        res.render(m_settings.viewsPath + '/partials/' + name);
    }
};

module.exports = routes;
