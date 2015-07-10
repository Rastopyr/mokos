
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

    function addRecursiveSubroutes (subroutes) {
      if (!subroutes.length) {  return Route; }

      Route.subroutes[subroutes[0].path] = subroutes[0];
      subroutes.shift();

      return addRecursiveSubroutes(subroutes);
    }

    return addRecursiveSubroutes(Array.prototype.slice.call(arguments));
  };

  return Route;
}

export default RouteFabric;

