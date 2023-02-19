import mapTypes from '../types/mapTypes';
import aerportMap from '../types/airportTypes';
import plainData from '../types/plainData';
import plainTrack from '../types/plainTrack';
import markerType from '../types/markerViewType';
import constains from '../constains';
import L from 'leaflet';
import 'leaflet-rotatedmarker';

import planeSVG from '../img/airplane.svg';
import planeSVGA from '../img/airplaneA.svg';

export default class FligtCore {
  private map: L.Map;
  private layer: L.Layer;

  private COUNTER = 0;
  private cnt = 0;
  private aircraftsView = new Map();

  constructor(mapType: number, position: string) {
    this.map = L.map('map').setView(aerportMap.get(position), 10);
    this.layer = L.tileLayer(mapTypes[mapType][0], mapTypes[mapType][1]);
  }

  render() {
    this.layer.addTo(this.map);
    console.log(planeSVG.fill);

    const planeIcon = L.icon({
      iconUrl: planeSVG,
      iconSize: [50, 50],
    });

    const planeIconA = L.icon({
      iconUrl: planeSVGA,
      iconSize: [50, 50],
    });

    setInterval(() => {
      this.mappingFlyght(planeIcon, planeIconA);
      console.log(this.cnt++);
    }, 5000);
  }

  async mappingFlyght(planeIcon: L.Icon, planeIconA: L.Icon) {
    // 1 Запрос данных о самолетах на сервер
    const res = await fetch(
      `https://opensky-network.org/api/states/all?lamin=53.7519&lomin=22.0571&lamax=66.4454&lomax=40.4963`,
      {
        headers: {
          Authorization: `Basic ${constains.OPENSKY_KEY}`,
        },
      },
    );

    // 2 Прием и первичная обработка данных, создание мапы для увеличения производительности
    const json = await res.json();
    const arrPlainsRawData: plainData[] = json.states;
    const aircraftsData: Map<string, plainData> = new Map();
    for (let i = 0; i < arrPlainsRawData.length; i++) {
      aircraftsData.set(arrPlainsRawData[i][1], arrPlainsRawData[i]);
    }

    // 3 Анализ данных
    // 3.1 Нулевой цикл, обновление данных на отображение
    if (!this.COUNTER) {
      aircraftsData.forEach((plainInfo, key) => {
        if (!this.aircraftsView.has(key)) {
          const plane: markerType = {
            marker: null,
            polyline: undefined,
            popUp: null,
          };

          if (plainInfo[6] && plainInfo[5]) {
            plane['marker'] = L.marker([plainInfo[6], plainInfo[5]], {
              icon: planeIcon,
              rotationAngle: +plainInfo[10],
            });
            const info = async () => {
              const path = await this.aircraftPath(plainInfo[0]);
              if (!plane['polyline']) {
                plane['marker'].setIcon(planeIconA);
                plane['polyline'] = L.polyline(path, { color: 'red' }).addTo(
                  this.map,
                );
                const popUp = await this.aircraftInfo(plainInfo[1].trim());
                document.body.append(popUp);
                plane['popUp'] = popUp;
              } else {
                plane['marker'].setIcon(planeIcon);
                const line = plane['polyline'];
                line.remove();
                plane['polyline'] = undefined;
                const popUp = plane['popUp'];
                popUp.remove();
                plane['popUp'] = null;
              }
            };
            plane['marker'].on('click', info);
          }
          this.aircraftsView.set(key, { plane: plane, status: 0 });
        } else {
          // upd planeView
          const plainView = this.aircraftsView.get(key);
          const latlng = L.latLng(plainInfo[6], plainInfo[5]);
          if (plainView['plane']['marker']) {
            plainView['plane']['marker'].setLatLng(latlng);
            plainView['plane']['marker'].setRotationAngle(+plainInfo[10]);
          }
        }
      });
      this.renderPlain();
    } else {
      console.log('ChangeData');
      this.aircraftsView.forEach((plainView, key) => {
        if (aircraftsData.has(key)) {
          const plainData = aircraftsData.get(key);
          if (plainData) {
            const latlng = L.latLng(plainData[6], plainData[5]);
            plainView['plane']['marker'].setLatLng(latlng);
            plainView['plane']['marker'].setRotationAngle(+plainData[10]);
          }
        } else {
          plainView['status']++;
        }
      });
      this.COUNTER++;
      if (this.COUNTER === 3) this.COUNTER = 0;
    }
  }

  renderPlain() {
    this.aircraftsView.forEach((value, key) => {
      if (value.status === 2) {
        this.map.removeLayer(value.plane.marker);
        this.aircraftsView.delete(key);
      } else {
        value.plane.marker.addTo(this.map).bindPopup(key);
      }
    });
  }

  async aircraftInfo(callsing: string) {
    console.log(callsing);
    const res = await fetch(
      `https://airlabs.co/api/v9/flight?flight_icao=${callsing}&api_key=3aa3e916-64eb-43d6-9ba3-0dcb0c26a1bd`,
    );
    const json = await res.json();
    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    if (json['response']) {
      const now_time = Math.round(Date.now() / 1000);
      const val =
        100 -
        Math.round(
          ((json['response'].arr_time_ts - now_time) * 100) /
            (json['response'].arr_time_ts - json['response'].dep_time_ts),
        );
      console.log('val', val);
      popUp.innerHTML = `
      <div class="popup__header">
        <h3>${json['response'].flight_icao} / <span>${json['response'].reg_number}</span></h3>
        <h4>${json['response'].aircraft_icao}</h4>
        <h4>${json['response'].airline_name}</h4>
      </div>
        <div class="popup__body">
          <table class="dep-arr-info">
            <tr>
              <td>
                <h2>${json['response'].dep_iata}</h2>
              </td>
              <td>
                <h2>-</h2>
              </td>
              <td>
                <h2>${json['response'].arr_iata}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h4>${json['response'].dep_city}</h4>
              </td>
              <td>
                <h4>-</h4>
              </td>
              <td>
                <h4>${json['response'].arr_city}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>${json['response'].dep_actual}</h4>
              </td>
              <td>
                <h4>-</h4>
              </td>
              <td>
                <h4>${json['response'].arr_time}</h4>
              </td>
            </tr>
          </table>
        </div>
        <div class="progress-bar"> 
          <label for="flight-progress">flight progress:</label>
          <progress id="flight-progress" max="100" value=${val}> 70% </progress>
        </div>
        <div class="flight-param">
          <h4>altitude <span>${json['response'].alt}</span></h4>
          <h4>speed <span>${json['response'].speed}</span></h4>
        </div>
      </div>
      `;
    }
    return popUp;
  }

  async aircraftPath(icao: string) {
    const res = await fetch(
      `https://opensky-network.org/api/tracks/all?icao24=${icao
        .toString()
        .trim()
        .toLowerCase()}&time=0`,
      {
        headers: {
          Authorization: 'Basic RXJtYWtvdjpFcm1ha292MjIwOA==',
        },
      },
    );
    const json: plainTrack = await res.json();
    console.log('json', json);
    const path: [number, number][] = [];
    json['path'].forEach(item => {
      const lan = item[1];
      const lat = item[2];
      path.push([lan, lat]);
    });
    return path;
  }
}
