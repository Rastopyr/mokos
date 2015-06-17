# mokos
Reactive http server

# API

## Server

### .server

**.request**

```javascript

var mokos = require('mokos');

var server = mokos.server();

server.request(function () {
  this.send('hello world');
});

```

