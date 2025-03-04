import { NewUserData } from '../@types/user';
import * as authRepository from '../repository/auth.repository';

export async function createUser(data: NewUserData) {
  return await authRepository.create(data);
}
