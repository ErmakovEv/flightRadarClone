export default class Window {
  private container: HTMLElement = document.body;
  private header: HTMLElement;

  constructor(header: HTMLElement) {
    this.header = header;
  }

  render(page: HTMLElement) {
    this.container.innerHTML = '';
    this.container.append(this.header, page);
  }
}
