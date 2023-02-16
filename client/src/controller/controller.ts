import Model from '../model/model';
import Dashboard from '../pages/dashboardView';
import Map from '../pages/mapView';
import Settings from '../pages/settingsView';
import Login from '../pages/LoginView';
import Admin from '../pages/adminView';
import userApi from '../api/userAPI';

import jwt_decode from 'jwt-decode';
import IJWTDecoded from '../types/jwtDecoded';
import { userType } from '../types/userType';

class Controller {
  private model: Model;
  private routes;

  private userApi = userApi;

  constructor() {
    const token = localStorage.getItem('token');
    let role: userType = 'DEFAULT';
    let id = 0;
    if (token) {
      role = jwt_decode<IJWTDecoded>(token).role as userType;
      id = jwt_decode<IJWTDecoded>(token).id;
    }
    this.model = new Model(role, id);
    this.routes = this.setRoutes();
  }

  async settingHandler() {
    return await this.model.getSetting();
  }

  async settingToggle() {
    await this.model.toggleMapType();
  }

  async loginHandler(email: string, password: string) {
    try {
      const rawData = await this.userApi.login(email, password);
      localStorage.setItem('token', rawData['token']);
      if (rawData['token']) {
        const decodedData = jwt_decode<IJWTDecoded>(rawData['token']);
        this.model.setUser(decodedData.id, decodedData.role as userType);
        this.routes = this.setRoutes();
        let path: string;
        if (this.model.getUserRole() === 'ADMIN') {
          path = 'admin';
        } else {
          path = 'map';
        }
        // КОСТЫЛЬ!!!
        this.crutch(path);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async registationHandler(email: string, password: string, role: string) {
    try {
      const rawData = await this.userApi.registration(email, password, role);
      console.log(rawData);
    } catch (error) {
      console.log(error);
    }
  }

  setRoutes() {
    const user = this.model.getUserRole();
    if (user === 'DEFAULT') {
      return [{ path: '', view: Login, subPage: 0 }];
    }
    if (user === 'USER') {
      return [
        { path: '', view: Login, subPage: 0 },
        { path: 'map', view: Map, subPage: 0 },
        { path: 'dashboard', view: Dashboard, subPage: 0 },
        { path: 'settings', view: Settings, subPage: 0 },
      ];
    }
    return [
      { path: '', view: Login, subPage: 0 },
      { path: 'admin', view: Admin, subPage: 0 },
    ];
  }

  getRoutes() {
    return this.routes;
  }

  crutch(path: string) {
    history.pushState({}, '', path);
    history.pushState({}, '', '');
    history.back();
  }
}

export default Controller;
