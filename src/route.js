
function RouteFabric (routePath) {
  function Route () {
  
  }

  Route.sequence = [];
  Route.path = routePath;
  Route.subroutes = {};

  Route.type = 'route';

  Route.then = function (handler) {
    if (handler.type && handler.type === 'route') {
      Route.subroutes[handler.routePath] = handler;
      return control;
    }

    Route.sequence.push(handler);
    return Route;
  };

  Route.sub = function (subroute) {
    if ('string' === typeof subroute) {
      let newRoute = RouteFabric(subroute);

      Route.subroutes[subroute] = newRoute;
      return newRoute;
    }

    Route.subroutes[subroute.path] = subroute;
    return Route;
  };

  return Route;
}

export default RouteFabric;

