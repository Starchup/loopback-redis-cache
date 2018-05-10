# loopback-redis-cache
Caching system for Loopback through redis

### Usage client side

In a boot script
```
var cache = require('loopback-redis-cache')(
{
    app: app,
    models: ['Customer']
});
```


Then in the models you want to use cache
```
var cache = require('loopback-redis-cache')();
cache.findObj('Customer', 'id', 1).then(function (customer)
{
    console.log(customer);
});
```