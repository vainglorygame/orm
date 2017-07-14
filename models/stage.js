/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stage', {
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
    season_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    end: {
      type: DataTypes.TIME,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('group','league','swiss','single_elimination','double_elimination','bracket'),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('planned','active','finished'),
      allowNull: false
    },
    phase: {
      type: DataTypes.ENUM('pre-season','group','playoffs','finals'),
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'stage',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
