import { Brand } from '../models/models'; //??
import express = require('express');

class BrandController {
  async create(req: express.Request, res: express.Response) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async getAll(req: express.Request, res: express.Response) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

export default new BrandController();
