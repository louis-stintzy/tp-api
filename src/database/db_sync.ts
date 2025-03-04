import connect from './db_connect';

import { User } from '../models';

const sequelize = connect();

async function syncModels() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    await User.sync({ force: false }); // note that force: true will drop the table if it already exists
    console.log('User model synchronized.');

    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
}

// void car syncModels ne retourne rien et les erreurs sont gérées dans le bloc try/catch
void syncModels();
