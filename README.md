[![Stories in Ready](https://badge.waffle.io/fun-stack/mokos.png?label=ready&title=Ready)](https://waffle.io/fun-stack/mokos)
# mokos
Nested routes, for [PromisePipe](https://github.com/edjafarov/PromisePipe)

## API

### Route(routeName)

Register new route and return API route object.

**Arguments**
* routeName - { String }  Name of route

### .then(chain)

Register `chain` function as handler of route.

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
* Route1 - { RouteObject } Result of route contructor. There may be any number

**Example**
```javascript
Route('/')
  .then(getDataForIndexPage)
  .sub(
    Route('/users').then(getAllUsers).then(renderUserList)
    Route('/user').then(getUser).then(renderUser)
  )
```

### .use(name, handler)

Add `handler` to namespace of RouteObject on `name` property.

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
