var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();

console.log(process.env.REDIS_ADDR + ':' + process.env.REDIS_PORT);

var client = redis.createClient(
	process.env.REDIS_PORT || '6379',
  process.env.REDIS_ADDR || '10.0.210.166'
);

app.get('*', function(req, res, next) {
  client.incr('api_v4_counter', function(err, counter) {
    if(err) {
      console.log(err);
      return next(err);
    }
    const result = {
      'status': 'ok',
      'message': '',
      'data': {
        'redis_counter': counter
      }
    }
    return res.send(JSON.stringify(result));
  });
});

http.createServer(app).listen(process.env.PORT || 3002, function() {
  console.log('Listening on port ' + (process.env.PORT || 3002));
});
