import { Api } from './api';

class userApi extends Api {
  private path = '/user';

  login(email: string, password: string) {
    return this.request(this.path + '/login', {
      method: 'POST',
      data: {
        email,
        password,
      },
    });
  }

  registration(email: string, password: string, role: string) {
    return this.request(this.path + '/reg', {
      method: 'POST',
      data: {
        email,
        password,
        role,
      },
    });
  }
}

export default new userApi();
