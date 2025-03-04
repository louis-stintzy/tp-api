import bcrypt from 'bcrypt';
import { NewUserData, UserWithTokenData } from '../@types/user';
import * as authRepository from '../repository/auth.repository';
import jwt from 'jsonwebtoken';

export async function createUser(data: NewUserData) {
  // Get the email and password from the request body
  const { email, password } = data;
  // Verify if the user already exists
  const userExist = await authRepository.findByEmail(email);
  if (userExist) {
    throw new Error('User already exists');
  }
  // Hash the password
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  data.password = hash;
  // Create the user
  return await authRepository.create(data);
}

export async function authenticateUser(data: NewUserData) {
  // Get the email and password from the request body
  const { email, password } = data;
  // Find the user by email
  const user = await authRepository.findByEmail(email);
  if (!user) {
    throw new Error('User or password incorrect (temp: User not found)'); // todo: suppr '->User not found' : ne pas indiquer si l'utilisateur existe ou non (message générique)
  }
  // Compare the password with the hash stored in the database
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('User or password incorrect (temp: Password incorrect)'); // todo: suppr '->Password incorrect' : ne pas indiquer si l'utilisateur existe ou non (message générique)
  }
  // return without password
  const { id } = user;
  // Generate a jwt
  const token = jwt.sign({ id: user.id }, 'ceciestunsecret', {
    // todo: utiliser process.env.JWT_SECRET
    expiresIn: '24h',
  });
  // Return the userId and the token
  const userIdWithToken = { userId: id, token } as UserWithTokenData;
  return userIdWithToken;
}
