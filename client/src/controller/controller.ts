import Model from '../model/model';

class Controller {
  private model: Model;

  constructor() {
    this.model = new Model();
  }
}

export default Controller;
