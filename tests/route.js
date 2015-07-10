
import { stub } from 'sinon';
import { expect, assert } from 'chai';
import RouteFabric from '../src/route';

describe('Route', function () {
  describe('api spec', function () {
    it('constructor should be function', function () {
      expect(RouteFabric).to.be.a('function');
    });

    it('route object should be a function', function () {
      expect(RouteFabric()).to.be.a('function');
    });

    it('route keys', function () {
      expect(RouteFabric()).to.have.all.keys('path', 'sequence', 'sub', 'subroutes', 'then', 'type');
    });

    it('route path', function () {
      expect(RouteFabric('/')).have.property('path').and.equal('/');
    });

    it('route type', function () {
      expect(RouteFabric()).have.property('type').and.equal('route');
    });
  });

  describe('sequence', function () {
    it('should register handler in sequence', function () {
      let handler = stub(), Route = RouteFabric('/');

      Route.then(handler);

      assert.include(Route.sequence, handler, 'register route in route sequence');
    });

    it('should register handler in sequence in correct order', function () {
      let handler = stub(), handler2 = stub(),  Route = RouteFabric('/');

      Route.then(handler).then(handler2).then(handler);

      expect(Route.sequence).eql([handler, handler2, handler], 'order register of handler in sequence');
    });
  });

  describe('subroutes', function () {
    let Route = RouteFabric('/'), subHandler = stub();

    it('should register subroute', function () {
      Route.sub('/sub').then(subHandler);
      expect(Route.subroutes).have.property('/sub');    
    });

    it('should register handler in subroute', function () {
      Route.sub('/sub').then(subHandler);
      assert.include(Route.subroutes['/sub'].sequence, subHandler, 'subroutes contain handler in sequence');

    });

    it('should register subroute when route as argument', function () {
      let sub = RouteFabric('/sub');

      Route.sub(sub);

      expect(Route.subroutes).have.property('/sub');
      assert.equal(Route.subroutes['/sub'], sub, 'subroute equeal defined subroute');
    });
  });
 });

