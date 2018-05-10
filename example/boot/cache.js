module.exports = function startCache(app)
{
    // Server
    var cache = require('../../cache.js')(
    {
        app: app,
        models: ['Customer'],
        // unPrimed: function (modelName)
        // {
        //     console.log('unprimed');
        // }
    });
};