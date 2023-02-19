import Controller from '../controller/controller';
import RotesType from '../types/routeType';

export default class Router {
  private routes: RotesType[];
  private controller: Controller;

  constructor() {
    this.controller = new Controller();
    this.routes = this.controller.getRoutes();
  }

  route() {
    this.routes = this.controller.getRoutes();
    let match = this.routes.find(route => {
      const loc = location.pathname.slice(1);
      if (route.path === loc) {
        return route;
      }
      return false;
    });
    if (!match) {
      match = this.routes[0];
    }
    return new match.view(match.path ? match.path : 'login', this.controller);
  }

  get() {
    return this.routes.map(item => item['path']);
  }
}
