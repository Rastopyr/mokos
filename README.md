# mokos
[![Build Status](https://travis-ci.org/fun-stack/mokos.svg)](https://travis-ci.org/fun-stack/mokos)
[![Stories in Ready](https://badge.waffle.io/fun-stack/mokos.png?label=ready&title=Ready)](https://waffle.io/fun-stack/mokos)

Nested routes, for [PromisePipe](https://github.com/edjafarov/PromisePipe)

## API

### Route(routeName)

Create new route and return API of route.

**Arguments**
* routeName - { String }  Name of route

### .then(chain)

Add `chain` function as handler of route.

**Arguments**
* chain - { Function || Promise } Handler of route chain. Function or Promise

**Example**
```javascript
function getDataForIndexPage() {
  // do some stuff
}

function renderIndexPage () {
  // do some stuff
}

Route('/').then(getDataForIndexPage).then(renderIndexPage)
```

### .sub(Route1, Route2, ... RouteN)

Add subroute for route.

**Arguments**
* Route1 - { Route } Result of route contructor. Routes may be any number

**Example**
```javascript
let indexRoute = Route('/')
  .then(getDataForIndexPage)

indexRoute.sub('/users').then(getAllUsers).then(renderUserList)
indexRoute.sub('/user').then(getUser).then(renderUser)

Route('/')
  .then(getDataForIndexPage)
  .sub(
    Route('/users').then(getAllUsers).then(renderUserList)
    Route('/user').then(getUser).then(renderUser)
  )
```

### .use(name, handler)

Add `handler` to namespace of Route on `name` property.

**Arguments**
* name - { String } Name of function
* handler - Handler function

**Example**
```javascript
Router.use('getUser', getUser);
Router.use('renderUser', renderUser);

Route('/')
  .sub(
    Route('/user').getUser().renderUser()
  )
```

## Router()

Create and return Router

### .Route(routePath)

Create new Route in Router scope.

### .adapter(adapterHandler)

Add adapter for this environment.

**Arguments**
* adapterHandler - { Function } Adapter for handling of change routing

### .getRoute(path, isFull)

Return route function by `path`.

**Arguments**
* path - { String } Path of route
* isFull - { Boolean } Include handlers, that marked as 'initial'

### .execRoute(path, isFull)

Execute sequence of Route by `path`

**Arguments**
* path - { String } Path of route
* isFull - { Boolean } Include handlers, that marked as 'initial'
