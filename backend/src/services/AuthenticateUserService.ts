import User from '../models/users';
import { compare } from 'bcryptjs';


interface Request {
  email: string;
  password: string;
}

interface Response {
  user: typeof User;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const user = await User.findOne({ email: email});

    if(!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    return {
      user,
    };

  }
}