import AbstractView from './abstractView';
import Controller from '../controller/controller';
import DashboardCore from '../core/dashboardCore';

export default class Dashboard extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.createDashboard();
  }

  async createDashboard() {
    const res = await this.controller.settingHandler();
    const board = new DashboardCore(res.position);
    this.container.append(await board.render());
  }
}
