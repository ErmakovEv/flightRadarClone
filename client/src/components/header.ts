export default class Header {
  private container: HTMLElement;

  constructor(cb: () => void, routes: string[]) {
    this.container = document.createElement('header');
    this.container.classList.add('nav');
    for (const route of routes) {
      const createA = document.createElement('a');
      createA.setAttribute('href', '/' + route);
      createA.onclick = e => {
        e.preventDefault();
        history.pushState(null, null, createA.href);
        cb();
      };
      createA.textContent = '/' + route;
      this.container.append(createA);
    }
  }

  render() {
    return this.container;
  }
}
