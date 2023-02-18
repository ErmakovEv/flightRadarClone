import { userType } from '../types/userType';
import settingApi from '../api/settingApi';

class Model {
  private settingApi = settingApi;

  private userRole: userType;
  private userId: number;
  private mapType: number;
  private position: string;

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
    settingApi.set(this.userId, this.mapType, this.position);
  }

  async setPosition(airport: string) {
    this.position = airport;
    settingApi.set(this.userId, this.mapType, this.position);
  }

  async getSetting() {
    const data = await this.settingApi.getOne(this.userId);
    console.log(data);
    this.mapType = data['mapType'];
    this.position = data['geoPos'];
    const ans = {
      mapType: this.mapType,
      position: this.position,
    };
    return ans;
  }
}

export default Model;
