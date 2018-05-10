module.exports = function startCache(app)
{
    // Server
    var cache = require('../../cache.js')(
    {
        app: app,
        models: ['Customer']
    });
};