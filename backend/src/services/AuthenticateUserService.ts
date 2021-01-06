import userSchema from '../models/users';

interface Request {
  email: string;
  password: string;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<void> {
    

  }
}