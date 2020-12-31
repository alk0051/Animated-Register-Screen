import User from '../models/users';
import { Request, Response } from 'express';


interface UserController {

}


class UserController {
  static show(arg0: string, show: any) {
    throw new Error('Method not implemented.');
  }
  static create(arg0: string, create: any) {
    throw new Error('Method not implemented.');
  }


  async show(req: Request, res: Response) {
    const data = await User.find({});

    return res.json(data);
  }

  async create(req: Request, res: Response) {
    const data = await User.create(req.body);

    return res.json(data);
  }
}

export default UserController;
