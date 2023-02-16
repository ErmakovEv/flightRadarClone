import AbstractView from './abstractView';
import Controller from '../controller/controller';
import mapTypes from '../types/mapTypes';

import L from 'leaflet';
import 'leaflet-rotatedmarker';

export default class Map extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.createMap();
  }

  async createMap() {
    const mapType = await this.controller.settingHandler();

    const map = L.map('map').setView(
      [59.93413595579978, 30.340987379107066],
      8,
    );
    const osm = L.tileLayer(mapTypes[mapType][0], mapTypes[mapType][1]);

    osm.addTo(map);
  }
}
