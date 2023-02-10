import Controller from '../controller/controller';

import Dashboard from '../pages/dashboardView';
import Map from '../pages/mapView';
import Settings from '../pages/settingsView';

export default class Router {
  private routes = [
    { path: '', view: Dashboard, subPage: 0 },
    { path: 'map', view: Map, subPage: 0 },
    { path: 'settings', view: Settings, subPage: 0 },
  ];

  private controller: Controller;

  constructor() {
    this.controller = new Controller();
  }

  route() {
    let match = this.routes.find(route => {
      const loc = location.pathname.split('/').slice(1);
      console.log(location.pathname);
      if (route.path === loc[0]) {
        if (loc.length > 1) {
          route.subPage = +loc[1];
        }
        return route;
      }
      return false;
    });
    if (!match) {
      match = this.routes[0];
    }

    return new match.view(match.path, this.controller);
  }

  get() {
    return this.routes.map(item => item['path']);
  }
}
