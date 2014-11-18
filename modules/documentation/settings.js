
/**
 * @file settings.js
 * @namespace Documentation settings
 * @desc Platform Documentation settings
 */


// Module name
exports.name = 'Documentation';

// Module description
exports.description = 'Documentation module';

// Routes
exports.route_prefix = 'documentation';

// Root path
var modulePath = process.cwd() + '/modules/documentation';
exports.modulePath = modulePath;

// Paths
// Middlewares path
exports.middlewaresPath = modulePath + '/middlewares/';
// Models path
exports.modelsPath = modulePath + '/data/models/';
// Schemas path
exports.schemasPath = modulePath + '/data/schemas/';
// Views path
exports.viewsPath = modulePath + '/views/';
// Public path
exports.publicPath = modulePath + '/public/';
// Routes path
exports.routesPath = modulePath + '/routes/';

// Site settings
exports.highlights = true;

// Module actions
exports.actions = [];