import svgIcon from './plane.svg';

export default class Header {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('header');
    this.container.classList.add('header');
    console.log(1, svgIcon);
  }

  render(routes: string[]) {
    this.container.innerHTML = '';
    const nav = document.createElement('nav');
    nav.classList.add('header__nav', 'nav');
    for (const rout of routes) {
      if (rout) {
        const item = document.createElement('a');
        item.setAttribute('href', '/' + rout);
        item.classList.add('header__item');
        item.textContent = rout.toLocaleUpperCase();
        item.onclick = e => {
          e.preventDefault();
          history.pushState({}, '', item.href);
          history.pushState({}, '', '');
          history.back();
        };
        nav.append(item);
      }
    }
    const btnLogout = this.createLogoutBtn();
    this.container.append(btnLogout, nav);
    return this.container;
  }

  createLogoutBtn() {
    const btn = document.createElement('button');
    btn.classList.add('header__logout', 'btn');
    btn.textContent = 'log out';
    btn.onclick = () => {
      localStorage.removeItem('token');
      history.pushState({}, '', '/');
      location.reload();
    };
    return btn;
  }
}
