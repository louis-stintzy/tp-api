import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import connect from '../database/db_connect';

const sequelize = connect();

class Movie extends Model<
  InferAttributes<Movie>,
  InferCreationAttributes<Movie>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare releaseDate: Date;
  declare imageUrl: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'movie',
    timestamps: true,
  }
);

export default Movie;
