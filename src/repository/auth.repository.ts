import { NewUserData } from '../@types/user';
import { User } from '../models';

export async function findByEmail(email: string) {
  return await User.findOne({ where: { email } });
}

export async function create(data: NewUserData) {
  const newUser = (await User.create(data)).get({ plain: true });
  // return without password
  const { id, email, createdAt, updatedAt } = newUser;
  return { id, email, createdAt, updatedAt };
}
