import { Type } from '../models/models'; //???
import express = require('express');

class TypeController {
  async create(req: express.Request, res: express.Response) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getAll(req: express.Request, res: express.Response) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

export default new TypeController();
