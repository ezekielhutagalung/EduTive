'use strict';
const {
  Model
} = require('sequelize');

const emailLogin = require('../helpers/nodemailer')
const { hashing } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class Investor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Investor.hasMany(models.Borrower, {
        foreignKey: 'InvestorId', targetKey: 'id'
      })
    }
  };
  Investor.init({
    full_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance, option) {
        instance.password = hashing(instance.password)
      },
      afterCreate(instance, option) {
        emailLogin(instance.email, "Registrasi Berhasil Edutive-Id", instance.full_name)
      }
    },
    sequelize,
    modelName: 'Investor',
  });
  return Investor;
};