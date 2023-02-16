import { userType } from '../types/userType';

class Model {
  private user: userType;

  constructor(role: userType) {
    this.user = role;
  }

  getUser() {
    return this.user;
  }

  setUser(role: userType) {
    this.user = role;
  }
}

export default Model;
