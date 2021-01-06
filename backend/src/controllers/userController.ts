import User from '../models/users';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { hash } from 'bcryptjs';


export let showUsers = function showUsers(req: Request, res: Response, next: NextFunction) {
  User.find()
  .exec()
  .then((results) => {
    return res.status(200).json({
      users: results,
      count: results.length
    });
  })
  .catch((error: Error) => {
    return res.status(500).json({
      message: error.message,
      error
    });
  });
};

export let createUser = async function createUser(req: Request, res: Response, next: NextFunction) {
 
  let { firstName, lastName, email, password } = req.body;


  const emailExists = await User.findOne({ email: req.body.email });

  console.log(emailExists);
  if(emailExists) {
    return res.status(400).json({ eror: 'Email já cadastrado.' });
  }
  else {
    const hashedPassword = await hash(password, 8);
  
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName,
      lastName,
      email,
      password: hashedPassword
    });


    user.save().then(result => {
      return res.status(201).json({ user: result });
    })
    .catch(error => {
      return res.status(500).json({
      message: error.message,
      error
      });
    });
  }
};


export let deleteUser = async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    const removedUser = await User.remove({ _id: req.params.id });
    res.json(removedUser);

  }catch (err) {
    res.json({ message: err });
  }
};

export let updateUser = async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id }, 
      {$set : { firstName: req.body.firstName }}
    );
    res.json(updatedUser);
  }catch (err) {
    res.json({ message: err });
  }
}