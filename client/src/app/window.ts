import Header from '../components/header';

export default class Window {
  private container: HTMLElement = document.body;
  private header: Header;

  constructor() {
    this.header = new Header();
  }

  render(pageHTML: HTMLElement, routes: string[]) {
    this.container.innerHTML = '';
    this.container.append(this.header.render(routes));
    this.container.append(pageHTML);
  }
}
