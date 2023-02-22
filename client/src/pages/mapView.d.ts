import AbstractView from './abstractView';
import Controller from '../controller/controller';
export default class Map extends AbstractView {
    constructor(id: string, controller: Controller);
    createMap(): Promise<void>;
}
