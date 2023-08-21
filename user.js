'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'Email is invalid',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 20],
            msg: 'The password should be from 6 to 20 characters',
          },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: [/^[A-Za-z\-\'\s]{1,50}$/],
            msg: "The first name shouldn't contain special characters",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: [[/^[A-Za-z\-\'\s]{1,50}$/]],
            msg: "The first name shouldn't contain special characters",
          },
        },
      },
      address: DataTypes.STRING,
      phone: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: [[/^(?:\+?84|0)(?:\d{9,10})$/]],
            msg: 'Invalid phone number',
          },
        },
      },
      birthday: DataTypes.DATE,
      role: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [['customer', 'staff', 'manager', 'admin']],
            msg: 'Invalid role value',
          },
        },
      },
      salary: DataTypes.FLOAT,
      sex: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [['male', 'female', 'other']],
            msg: 'Invalid sex value',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        afterUpdate: async (instance) => {
          instance.updatedAt = new Date();
          await instance.save();
        },
      },
    },
  );
  return User;
};
