import { NewUserData } from '../@types/user';
import { User } from '../models';

export async function create(data: NewUserData) {
  return await User.create(data);
}
