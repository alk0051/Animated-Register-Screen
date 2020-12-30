import UserSchema from '../models/users';
import { Request, Response } from 'express';


async function show()
{
  const { name, email, password } = Request.body;
}