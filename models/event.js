/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    api_id: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    division_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    team_1_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    team_1_score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    team_2_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    team_2_score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    date: {
      type: DataTypes.TIME,
      allowNull: true
    },
    bestOf: {
      type: DataTypes.ENUM('1','3','5','7','9'),
      allowNull: true
    },
    winner_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    round: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'event',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
