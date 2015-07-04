# mokos
Nested routes, for [PromisePipe](https://github.com/edjafarov/PromisePipe)

# API

## Route

### Route(routeName)

Register new route and return API route object.

**Arguments**
* routeName - { String }  Name of route

#### .then(chain)

Register `chain` function as handler of route.

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
