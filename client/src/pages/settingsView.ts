import AbstractView from './abstractView';
import Controller from '../controller/controller';
import aerportMap from '../types/airportTypes';

export default class Settings extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.createSetting();
  }

  async createSetting() {
    //Set default settings values in View
    const res = await this.controller.settingHandler();

    const settingContainer = document.createElement('div');
    settingContainer.classList.add('setting-container');

    const label = document.createElement('label');
    label.classList.add('switch');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = Boolean(res.mapType);

    input.onclick = async () => {
      await this.controller.settingToggle();
    };

    const span = document.createElement('span');
    label.append(input, span);

    const select = document.createElement('select');
    select.name = 'airports';
    select.id = 'air';

    aerportMap.forEach((val, key) => {
      const option = document.createElement('option');
      if (key === res.position) {
        option.selected = true;
      }
      option.value = key;
      option.text = key;
      select.append(option);
    });

    select.onchange = () => {
      this.controller.positionHandler(select.value);
    };

    const table = document.createElement('table');
    table.classList.add('table');
    const caption = document.createElement('caption');
    caption.textContent = 'My settings';
    const tr1 = document.createElement('tr');
    const td11 = document.createElement('td');
    td11.textContent = 'Dark';
    const td12 = document.createElement('td');
    td12.append(label);
    tr1.append(td11, td12);
    const tr2 = document.createElement('tr');
    const td21 = document.createElement('td');
    td21.textContent = 'Airport';
    const td22 = document.createElement('td');
    td22.append(select);
    tr2.append(td21, td22);
    table.append(caption, tr1, tr2);

    settingContainer.append(table);
    this.container.append(settingContainer);
  }
}
