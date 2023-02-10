import Header from '../components/header';
import Router from './router';
import Window from './window';

export default class App {
  private header: Header;
  private router: Router;
  private window: Window;

  constructor() {
    this.router = new Router();
    this.header = new Header(this.load.bind(this), this.router.get());
    this.window = new Window(this.header.render());
  }

  load() {
    console.log('click');
    const page = this.router.route();
    this.window.render(page.render());
  }

  run() {
    this.load();
    document.addEventListener('DOMContentLoaded', () => {
      window.addEventListener('popstate', this.load);
      this.load();
    });
  }
}
