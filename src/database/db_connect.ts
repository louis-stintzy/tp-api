import { Sequelize } from 'sequelize';

const pg_url = 'postgres://tp:tp@localhost/tp'; // todo: utiliser PG_URL

function connect() {
  return new Sequelize(pg_url, {
    dialect: 'postgres',
    logging: console.log,
    define: {
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  });
}

export default connect;
