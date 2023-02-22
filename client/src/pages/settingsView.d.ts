import AbstractView from './abstractView';
import Controller from '../controller/controller';
export default class Settings extends AbstractView {
    constructor(id: string, controller: Controller);
    createSetting(): Promise<void>;
}
