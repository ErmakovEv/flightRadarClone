import AbstractView from './abstractView';
import Controller from '../controller/controller';

export default class Settings extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.container.textContent = '<h1>Welcome to Settings!</h1>';
  }
}
