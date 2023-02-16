import { userType } from '../types/userType';
import settingApi from '../api/settingApi';

class Model {
  private settingApi = settingApi;

  private userRole: userType;
  private userId: number;
  private mapType: number;

  constructor(role: userType, id: number) {
    this.userRole = role;
    this.userId = id;
    this.mapType = 0;
  }

  getUserRole() {
    return this.userRole;
  }

  setUser(id: number, role: userType) {
    this.userId = id;
    this.userRole = role;
  }

  async toggleMapType() {
    this.mapType = +!this.mapType;
    settingApi.set(this.userId, this.mapType);
  }

  async getSetting() {
    const data = await this.settingApi.getOne(this.userId);
    this.mapType = data['mapType'];
    return this.mapType;
  }
}

export default Model;
