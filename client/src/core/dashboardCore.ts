import aerportTypes from '../types/airportTypes';

export default class DashboardCore {
  private airport: string;
  constructor(airport: string) {
    this.airport = airport;
  }

  async render() {
    //TODO
    const res_weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Moskow,RU?unitGroup=metric&key=GX2K34VB5NU5QGAF8Q83LJHRN&iconSet=icons1`,
    );
    const json_weather = await res_weather.json();

    const res_dep = await fetch(
      `https://airlabs.co/api/v9/schedules?dep_icao=${this.airport}&api_key=3aa3e916-64eb-43d6-9ba3-0dcb0c26a1bd`,
    );
    const res_arr = await fetch(
      `https://airlabs.co/api/v9/schedules?arr_icao=${this.airport}&api_key=3aa3e916-64eb-43d6-9ba3-0dcb0c26a1bd`,
    );
    const json_dep = await res_dep.json();
    const json_arr = await res_arr.json();
    const shedule = document.createElement('div');
    shedule.classList.add('shedule');
    const htmlArrArray = json_arr['response'].map(item => {
      return `<tr>
      <td>${item.arr_time}</td>
      <td>${item.flight_icao} / ${item.flight_iata}</td>
      <td>${item.arr_iata}</td>
      <td>${item.aircraft_icao}</td>
      <td>${item.status}</td>
    </tr>`;
    });

    const htmlDepArray = json_dep['response'].map(item => {
      return `
      <tr>
      <td>${item.dep_time}</td>
      <td>${item.flight_icao} / ${item.flight_iata}</td>
      <td>${item.arr_iata}</td>
      <td>${item.aircraft_icao}</td>
      <td>${item.status}</td>
    </tr>
      `;
    });

    const header = document.createElement('div'); // append shedule
    header.classList.add('shedule__header');
    const title = document.createElement('div');
    title.classList.add('shedule__title');
    const h2 = document.createElement('h2');
    h2.textContent = this.airport;
    title.append(h2);
    const weather = document.createElement('div');
    weather.classList.add('shedule__weather');
    const h3 = document.createElement('h3');
    h3.textContent = json_weather['days'][0]['temp'];
    weather.append(h3);
    header.append(title, weather);

    const content = document.createElement('div');
    content.classList.add('shedule__content');
    const tableArr = document.createElement('table');
    const tableDep = document.createElement('table');
    tableArr.classList.add('table', 'table__arr');
    tableDep.classList.add('table', 'table__dep');
    const capArr = document.createElement('caption');
    const capDep = document.createElement('caption');
    capArr.textContent = 'Arrival';
    capDep.textContent = 'Departure';
    const theadArr = document.createElement('thead');
    const theadDep = document.createElement('thead');
    const trHeadArr = document.createElement('tr');
    const trHeadDep = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
      const tdArr = document.createElement('td');
      const tdDep = document.createElement('td');
      if (i === 0) {
        tdArr.textContent = 'Time';
        tdDep.textContent = 'Time';
      }
      if (i === 1) {
        tdArr.textContent = 'Flight';
        tdDep.textContent = 'Flight';
      }
      if (i === 2) {
        tdArr.textContent = 'From';
        tdDep.textContent = 'To';
      }
      if (i === 3) {
        tdArr.textContent = 'Aircraft';
        tdDep.textContent = 'Aircraft';
      }
      if (i === 4) {
        tdArr.textContent = 'Status';
        tdDep.textContent = 'Status';
      }

      trHeadDep.append(tdDep);
      trHeadArr.append(tdArr);
    }
    theadArr.append(trHeadArr);
    theadDep.append(trHeadDep);

    const tbodyArr = document.createElement('tbody');
    const tbodyDep = document.createElement('tbody');

    tbodyArr.innerHTML = htmlArrArray.slice(0, 6).join('');
    tbodyDep.innerHTML = htmlDepArray.slice(0, 6).join('');

    tableArr.append(capArr, theadArr, tbodyArr);
    tableDep.append(capDep, theadDep, tbodyDep);

    content.append(tableArr, tableDep);

    const footer = document.createElement('div');
    footer.classList.add('shedule__footer');
    let j = 1;
    for (let i = 0; i < htmlArrArray.length; i += 5) {
      const button = document.createElement('button');
      button.classList.add('shedule__button', 'button');
      button.textContent = j.toString();
      j++;
      button.onclick = () => {
        tbodyArr.innerHTML = '';
        tbodyDep.innerHTML = '';
        tbodyArr.innerHTML = htmlArrArray.slice(i, i + 6).join('');
        tbodyDep.innerHTML = htmlDepArray.slice(i, i + 6).join('');
      };
      footer.append(button);
    }

    shedule.append(header, content, footer);

    //   shedule.innerHTML = `
    // //   <div class="shedule__header">
    // //     <div class="shedule__title">
    // //       <h2>LED/ULLI</h2>
    // //     </div>
    // //     <div class="shedule__wether">
    // //       <h3>-7</h3>
    // //       <h3>16tc</h3>
    // //       <h3>120</h3>
    // //     </div>
    // // </div>
    // <div class="shedule__content">
    //   <div class="shedule__table arr">
    //     <table class="table table__arr">
    //       <caption>
    //         Arrival
    //       </caption>
    //       <thead>
    //         <tr>
    //           <td>Time</td>
    //           <td>Flight</td>
    //           <td>From</td>
    //           <td>Aircraft</td>
    //           <td>Status</td>
    //         </tr>
    //       </thead>
    //       <tbody>

    //       </tbody>
    //     </table>
    //   </div>
    //   <div class="dep">
    //     <table class="table table__dep">
    //       <caption>
    //         Departures
    //       </caption>
    //       <thead>
    //         <tr>
    //           <td>Time</td>
    //           <td>Flight</td>
    //           <td>To</td>
    //           <td>Aircraft</td>
    //           <td>Status</td>
    //         </tr>
    //       </thead>
    //       <tbody>

    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    //   `;
    return shedule;
  }
}
