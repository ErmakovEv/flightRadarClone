import AbstractView from './abstractView';
import Controller from '../controller/controller';
import FlightCore from '../core/flightCore';

export default class Map extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.createMap();
  }

  async createMap() {
    const res = await this.controller.settingHandler();
    const flight = new FlightCore(res.mapType, res.position);
    flight.render();
  }
}
