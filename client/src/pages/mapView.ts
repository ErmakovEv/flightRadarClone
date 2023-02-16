import AbstractView from './abstractView';
import Controller from '../controller/controller';

import L from 'leaflet';
import 'leaflet-rotatedmarker';

export default class Map extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.createMap();
  }

  createMap() {
    setTimeout(() => {
      const map = L.map('map').setView(
        [59.93413595579978, 30.340987379107066],
        8,
      );
      const osm = L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      );

      osm.addTo(map);
    }, 100);
  }
}
