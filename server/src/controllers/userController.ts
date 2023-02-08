import express = require('express');

class UserController {
  // async registration(req, res) {}
  // async login(req, res) {}
  async check(req: express.Request, res: express.Response) {
    res.json('test controllers');
  }
}

export default new UserController();
