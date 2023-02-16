import AbstractView from './abstractView';
import Controller from '../controller/controller';

export default class Settings extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.createSetting();
  }

  async createSetting() {
    //Переделать!
    const settingContainer = document.createElement('div');
    settingContainer.classList.add('setting-container');

    const label = document.createElement('label');
    label.classList.add('switch');
    const input = document.createElement('input');
    input.type = 'checkbox';

    input.onclick = async () => {
      await this.controller.settingToggle();
    };

    input.checked = Boolean(await this.controller.settingHandler());
    const span = document.createElement('span');
    label.append(input, span);
    const table = document.createElement('table');
    table.classList.add('table');
    const caption = document.createElement('caption');
    caption.textContent = 'My settings';
    const tr = document.createElement('tr');
    for (let i = 0; i < 2; i++) {
      const td = document.createElement('td');
      if (!i) td.textContent = 'Dark';
      else {
        td.append(label);
      }
      tr.appendChild(td);
    }
    table.append(caption, tr);

    settingContainer.append(table);

    this.container.append(settingContainer);
  }
}
