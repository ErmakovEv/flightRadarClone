import Controller from '../controller/controller';

export default class AbstractView {
  protected container: HTMLElement;
  protected id: string;
  protected controller: Controller;

  constructor(id: string, controller: Controller) {
    this.controller = controller;
    this.container = document.createElement('div');
    this.container.classList.add(`container-${id}`);
    this.container.id = id;
    this.setTitle();
  }

  setTitle() {
    document.title = this.id;
  }

  render() {
    return this.container;
  }
}
