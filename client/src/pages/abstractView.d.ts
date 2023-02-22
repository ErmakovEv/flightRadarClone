import Controller from '../controller/controller';
export default class AbstractView {
    protected container: HTMLElement;
    protected id: string;
    protected controller: Controller;
    constructor(id: string, controller: Controller);
    setTitle(): void;
    render(): HTMLElement;
}
