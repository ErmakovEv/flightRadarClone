import AbstractView from './abstractView';
import Controller from '../controller/controller';
export default class Dashboard extends AbstractView {
    constructor(id: string, controller: Controller);
    createDashboard(): Promise<void>;
}
