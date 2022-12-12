import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
// import { User } from '@interfaces/users.interface';

// export type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password'>;

export class User extends Model {
  public id: number;
  public email: string;
  public admin: boolean;
  public password: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof User {
  User.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      admin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return User;
}
