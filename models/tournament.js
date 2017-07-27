/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tournament', {
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
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('planned','active','finished'),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('players','team'),
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
    region: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    tag_line_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tag_line_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tournament',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
