import bcrypt from 'bcrypt';
import { NewUserData } from '../@types/user';
import * as authRepository from '../repository/auth.repository';

export async function createUser(data: NewUserData) {
  const { email, password } = data;
  const userExist = await authRepository.findByEmail(email);
  if (userExist) {
    throw new Error('User already exists');
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  data.password = hash;
  return await authRepository.create(data);
}
