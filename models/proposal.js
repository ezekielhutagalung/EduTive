'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proposal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Proposal.belongsTo(models.Borrower)
      Proposal.belongsToMany(models.Investor, {
        through: models.Command,
        foreignKey: 'ProposalId'
      })
    }
  };
  Proposal.init({
    money_needed: DataTypes.INTEGER,
    selected_education: DataTypes.STRING,
    lend_deadline: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proposal',
  });
  return Proposal;
};