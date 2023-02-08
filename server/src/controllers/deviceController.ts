import express = require('express');
import uuid = require('uuid');
import path = require('path');
import { Device } from '../models/models';
import { UploadedFile } from 'express-fileupload';

class DeviceController {
  async create(req: express.Request, res: express.Response) {
    const { name, price, brandId, typeID, info } = req.body;
    const img = req.files?.img as UploadedFile;
    console.log(img);
    const fileName: string = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
    const device = await Device.create({ name, price, brandId, typeID, img: fileName });
    return res.json(device);
  }
  async getAll(req: express.Request, res: express.Response) {
    console.log();
  }
  async getOne(req: express.Request, res: express.Response) {
    console.log();
  }
}

export default new DeviceController();
