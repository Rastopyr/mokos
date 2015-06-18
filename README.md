# mokos
Reactive http server

# API

## Server

**.server**

```javascript

const server = mokos.server(function (request, response) {
  response.send('hello');
});

```

**.request**

```javascript

const mokos = require('mokos');

const server = mokos.server();

server.request(function (requset, response) {
  response.send('hello world');
});

```

**.route**

```javascript

const request = mokos.server().request();

request.route('/').onValue(function (request, response) {
  response.send('index');
});

request.route('/profile').onValue(function () {
  response.send('profile');
});

```

**.use**

```javascript

const server = mokos.server();

server.use(function (request, response) {
  return new Promise(function (resolve, reject) {
    resolve(response.set('locals', value), request);
  });
});


server.request(function (request, response) {
  response.send(res.locals.get('value'));
});

```

