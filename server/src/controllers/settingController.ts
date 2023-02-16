import express = require('express');
import { Setting } from '../models/models';

class SettingController {
  async set(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { mapType } = req.body;
    console.log('!', req.body);
    const setting = await Setting.update(
      {
        mapType: mapType,
      },
      {
        where: { userId: id },
      },
    );
    res.json(setting);
  }
  async getAll(req: express.Request, res: express.Response) {
    const settings = await Setting.findAll();
    return res.json(settings);
  }
  async getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const setting = await Setting.findOne({ where: { userId: id } });
    return res.json(setting);
  }
}

export default new SettingController();
