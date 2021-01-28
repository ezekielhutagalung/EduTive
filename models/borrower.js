'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Borrower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrower.belongsTo(models.Investor)
    }
  };
  Borrower.init({
    full_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    money_needed: DataTypes.INTEGER,
    selected_education: DataTypes.STRING,
    loan_time: DataTypes.STRING,
    speech_box: DataTypes.STRING,
    InvestorId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Borrower',
  });
  return Borrower;
};