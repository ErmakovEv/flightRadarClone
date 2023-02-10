import AbstractView from './abstractView';
import Controller from '../controller/controller';

export default class Map extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.container.textContent = '<h1>Welcome to Map!</h1>';
  }
}
