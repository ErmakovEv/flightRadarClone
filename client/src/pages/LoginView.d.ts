import AbstractView from './abstractView';
import Controller from '../controller/controller';
export default class Login extends AbstractView {
    constructor(id: string, controller: Controller);
    private createForm;
}
