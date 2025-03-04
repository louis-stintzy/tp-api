import connect from './db_connect';

const sequelize = connect();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion réussie à la base de données');
  })
  // todo : typer l'erreur
  .catch((err: unknown) => {
    console.error('Impossible de se connecter à la base de données :', err);
  });
