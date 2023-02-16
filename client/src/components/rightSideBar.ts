export default class RightSideBar {
  private container: HTMLElement;

  constructor(cb: () => void) {
    this.container = document.createElement('div');
    this.container.classList.add('right-side-bar');

    const settingsBtn = document.createElement('a');
    settingsBtn.classList.add('right-side-bar__settigs-btn', 'button');
    settingsBtn.setAttribute('href', '/settings');
    settingsBtn.textContent = 'Settings';
    settingsBtn.onclick = e => {
      e.preventDefault();
      history.pushState(null, '', settingsBtn.href);
      cb();
    };
  }

  render() {
    return this.container;
  }
}
