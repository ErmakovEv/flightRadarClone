import Router from './router';
import Window from './window';

export default class App {
  private router: Router;
  private window: Window;

  constructor() {
    this.router = new Router();
    this.window = new Window();
  }

  load() {
    const page = this.router.route();
    this.window.render(page.render(), this.router.get());
  }

  run() {
    document.addEventListener('DOMContentLoaded', () => {
      window.addEventListener('popstate', e => {
        e.preventDefault();
        this.load();
      });
      this.load();
    });
  }
}
