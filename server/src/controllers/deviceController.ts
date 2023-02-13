import express = require('express');
import uuid = require('uuid');
import path = require('path');
import { Device, DeviceInfo } from '../models/models';
import { UploadedFile } from 'express-fileupload';

class DeviceController {
  async create(req: express.Request, res: express.Response) {
    const { name, price, brandId, typeID } = req.body;
    const img = req.files?.img as UploadedFile;
    console.log(img);
    const fileName: string = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
    const device = await Device.create({ name, price, brandId, typeID, img: fileName });
    return res.json(device);
  }
  async getAll(req: express.Request, res: express.Response) {
    const { brandId, typeId, limitString, page } = req.query;
    let pageNumber = 1;
    if (typeof page === 'string') pageNumber = +page;
    let limit = 9;
    if (typeof limitString === 'string') limit = +limitString;
    const offset = pageNumber * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAll({ where: { typeId }, limit, offset });
    }
    if (brandId && typeId) {
      devices = await Device.findAll({ where: { brandId, typeId }, limit, offset });
    }
    return res.json(devices);
  }
  async getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });
    return res.json(device);
  }
}

export default new DeviceController();
