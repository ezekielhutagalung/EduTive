'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Command extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Command.init({
    lend_status: DataTypes.STRING,
    lend_history: DataTypes.STRING,
    InvestorId: DataTypes.INTEGER,
    ProposalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Command',
  });
  return Command;
};