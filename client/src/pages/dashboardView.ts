import AbstractView from './abstractView';
import Controller from '../controller/controller';

export default class Dashboard extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.container.textContent = 'Welcome to Dashboard!';
  }
}
