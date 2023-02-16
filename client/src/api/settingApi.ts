import { Api } from './api';

class settingApi extends Api {
  private path = '/setting';

  set(id: number, mapType: number) {
    return this.request(this.path + '/' + id, {
      method: 'POST',
      data: {
        mapType: mapType,
      },
    });
  }

  getAll() {
    return this.request(this.path, { method: 'GET' });
  }

  getOne(id: number) {
    return this.request(this.path + '/' + id, { method: 'GET' });
  }
}

export default new settingApi();
